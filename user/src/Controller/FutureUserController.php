<?php

namespace App\Controller;

use App\Entity\FutureUser;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Util\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api')]
class FutureUserController extends AbstractController
{
    #[Route('/inscription', name: '_inscription', methods: "POST")]
    public function inscription(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $futureUser = new FutureUser();
        $futureUser
            ->setEmail($data['email'])
            ->setName($data['name'])
            ->setLastname($data['lastname'])
            ->setPhone($data['phone'])
            ->setNationality($data['nationality'])
            ->setValidate(false)
        ;
        $entityManager->persist($futureUser);
        $entityManager->flush();

        return new JsonResponse(["status" => "success"], 200);
    }
}
