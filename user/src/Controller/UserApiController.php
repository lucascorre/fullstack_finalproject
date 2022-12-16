<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

#[Route('/api/user', name: 'app_user_api')]
class UserApiController extends AbstractController
{
    #[Route('/', name: '_index')]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json([
                'id' => $user->getId(),
                'user' => $user->getUserIdentifier(),
                'roles' => $user->getRoles()]
        );
    }

    #[Route('/check-role', name: '_check_role', methods: "POST")]
    public function checkRole(Request $request, SerializerInterface $serializer): JsonResponse
    {
        $user = $this->getUser();
        $role = json_decode($request->getContent(), true)['role'];
        if (!in_array($role, $user->getRoles())) {
            return new JsonResponse(['hasRole' => false], 400);
        } else { return new JsonResponse(['hasRole' => true], Response::HTTP_OK, []); }
    }
}
