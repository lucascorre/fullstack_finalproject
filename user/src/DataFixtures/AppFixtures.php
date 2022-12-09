<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;
    public function __construct(UserPasswordHasherInterface $passwordHasher) {
        $this->passwordHasher = $passwordHasher;
    }
    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user
            ->setEmail('user@email.com')
            ->setPassword($this->passwordHasher->hashPassword($user, 'user'))
        ;
        $manager->persist($user);
        $admin = new User;
        $admin
            ->setEmail('admin@email.com')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword($this->passwordHasher->hashPassword($user, 'admin'))
        ;
        $manager->persist($admin);
        $manager->flush();
    }
}
