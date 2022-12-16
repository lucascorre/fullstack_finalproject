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
    #[Route('/', name: 'app_user_api_index')]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json([
                'id' => $user->getId(),
                'user' => $user->getUserIdentifier(),
                'roles' => $user->getRoles()]
        );
    }

    #[Route('/check_role', name: 'app_user_api_check_role', methods: "POST")]
    public function checkRole(Requestuest $request, SerializerInterface $serializer): JsonResponse
    {
        $var = $request->getContent();
        $json = $serializer->decode($var, 'json');
        $role = $json["role"];
        if (!$role) {
            return new JsonResponse([
                'message' => 'Wrong role'
            ], 400);
        }
        return new JsonResponse($role, Response::HTTP_OK, [], true);
    }
}
