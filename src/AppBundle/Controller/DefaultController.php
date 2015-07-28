<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        return $this->render('pages/index.html.twig');
    }

    /**
     * @Route("/products", name="products")
     */
    public function productsAction()
    {
        return $this->render('pages/products.html.twig');
    }

    /**
     * @Route("/about", name="about")
     */
    public function aboutAction()
    {
        return $this->render('pages/about.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contactAction()
    {
        return $this->render('pages/contact.html.twig');
    }
}
