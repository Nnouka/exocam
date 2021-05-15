<?php


namespace App\Exceptions;


class GlobalException extends \Exception
{

    private $redirectTo;
    /**
     * GlobalException constructor.
     */
    public function __construct($message, $redirectTo = null)
    {
        parent::__construct($message);
        $this->redirectTo = $redirectTo;
    }

    /**
     * @return mixed
     */
    public function getRedirectTo()
    {
        return $this->redirectTo;
    }

}
