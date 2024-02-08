<?php



Namespace Ficiton\Extesion\Controller;

use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\HtmlResponse;
use LDAP\Result;
use psr\Http\Message\ServerRequestInterface  as Reuqest;
use psr\Http\Message\ResponseInterface as Response;

class BookHomePages implements RequestHandlerInterface
{

    /**
     * Handles a request and produces a response.
     *
     * May call other collaborating code to generate the response.
     *
     * @param \Psr\Http\Message\ServerRequestInterface $request
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function handle(Reuqest $request):Response {
        return new HtmlResponse('<h1>hello world !<>');
    }
};