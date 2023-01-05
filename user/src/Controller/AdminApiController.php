<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/admin', name: 'app_admin_api')]
class AdminApiController extends AbstractController
{
    #[Route('/', name: '_index')]
    public function index(): Response
    {
        $admin = $this->getUser();
        return $this->json([
                'user' => $admin->getUserIdentifier(),
                'roles' => $admin->getRoles()]
        );
    }

    #[Route('/users', name: '_users')]
    public function listUsers(EntityManagerInterface $entityManager, SerializerInterface $serializer): JsonResponse
    {
        return $this->json([
            "users" => $entityManager->getRepository(User::class)->findAll()
        ]);
    }

    #[Route('/future-users', name: '_index')]
    public function listFutureUsers(EntityManagerInterface $entityManager): JsonResponse
    {
        return $this->json([
            "users" => $entityManager->getRepository(FutureUser::class)->findBy(['validate' => false])
        ]);
    }

    #[Route('/inscription/validate-user/{id}', name: '_validate_user', methods: "POST")]
    public function validateUser(EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher, $id=null): JsonResponse
    {
        $response = new JsonResponse();
        if ($id) {
            $futureUser = $entityManager->getRepository(FutureUser::class)->findOneBy(['id' => $id]);
            if ($futureUser instanceof FutureUser) {
                $futureUser->setValidate(true);
                $entityManager->persist($futureUser);
                $user = new User();
                $user
                    ->setEmail($futureUser->getEmail())
                    ->setPassword($passwordHasher->hashPassword($user, 'password'))
                    ->setUserInfo($futureUser)
                ;
                $entityManager->persist($user);
                $entityManager->flush();
                $response->setData(["status" => "success", "message" => "User validated"]);
            } else { $response->setData(["status" => "error", "message" => "User not found"]); }
        } else { $response->setData(["status" => "error", "message" => "Missing Parameters"]); }
        return $response;
    }
}
