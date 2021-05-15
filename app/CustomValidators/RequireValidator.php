<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 10/10/20
 * Time: 10:08 AM
 */

namespace App\CustomValidators;


use App\Exceptions\ApiException;
use App\Http\HttpStatus;

class RequireValidator
{
    protected $endpoint;
    protected $validatorArr = [];
    const NOTBLANK = 'NOTBLANK';
    const EMAIL = 'EMAIL';
    const NOTNULL = 'NOTNULL';
    const LESSTHAN = 'LESSTHAN';
    const GREATERTHAN = 'GREATERTHAN';
    const NEGATIVE = 'NEGATIVE';
    const POSITIVE = 'POSITIVE';

    /**
     * @return mixed
     */
    public function getEndpoint()
    {
        return $this->endpoint;
    }

    /**
     * @param mixed $endpoint
     */
    public function setEndpoint($endpoint)
    {
        $this->endpoint = $endpoint;
    }


    protected function requireValidator($objects){
        foreach ($objects as $key => $object) {
            $this->validatorArr = array_merge($this->validatorArr, $this->call($object["type"], $key, $object['value']));
        }
    }

    private function call($validator, $key, $value) {
        switch ($validator) {
            case self::NOTBLANK :
                return StringValidator::notBlank([$key => $value]);
            case self::EMAIL :
                return StringValidator::email([$key => $value]);
            case self::NOTNULL :
                return NumberValidator::notNull([$key => $value]);
            case self::GREATERTHAN :
                return NumberValidator::greaterThan([$key => $value]);
            case self::LESSTHAN :
                return NumberValidator::lessThan([$key => $value]);
            case self::NEGATIVE :
                return NumberValidator::negative([$key => $value]);
            case self::POSITIVE :
                return NumberValidator::positive([$key => $value]);
            default :
                return [];
        }
    }

    /**
     * @throws ApiException
     */
    public function validate() {
        $validate = array_unique(
                $this->validatorArr
            );
        if ($validate !== []) {
            throw new ApiException("validation error", HttpStatus::HTTP_BAD_REQUEST, $validate);
        }
    }
}
