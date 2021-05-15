<?php


namespace App\Exceptions;


use Illuminate\Contracts\Support\Jsonable;

class ApiException extends \Exception implements Jsonable
{
    protected $endpoint;
    protected $errors = [];

    /**
     * ApiException constructor.
     * @param $endpoint
     */
    public function __construct($message, $code, $errors = [], $previous = null, $endpoint = "/")
    {
        parent::__construct($message, $code, $previous);
        $this->endpoint = $endpoint;
        $this->errors = $errors;
    }

    /**
     * @return mixed|string
     */
    public function getEndpoint()
    {
        return $this->endpoint;
    }

    /**
     * @param mixed|string $endpoint
     */
    public function setEndpoint($endpoint): void
    {
        $this->endpoint = $endpoint;
    }

    /**
     * @return array
     */
    public function getErrors(): array
    {
        return $this->errors;
    }

    /**
     * @param array $errors
     */
    public function setErrors(array $errors): void
    {
        $this->errors = $errors;
    }




    public function toJson($options = 0)
    {
        if (count($this->getErrors()) > 0) {
            return json_encode([
                "message" => $this->getMessage(),
                "code" => $this->getCode(),
                "errors" => $this->getErrors(),
                "endpoint" => $this->getEndpoint()
            ]);
        }
        return json_encode([
            "message" => $this->getMessage(),
            "code" => $this->getCode(),
            "endpoint" => $this->getEndpoint()
        ]);
    }
}
