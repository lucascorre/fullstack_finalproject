<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
}
