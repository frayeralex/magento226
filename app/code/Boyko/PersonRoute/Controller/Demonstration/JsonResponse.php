<?php
/**
 * Created by PhpStorm.
 * User: alexboyko
 * Date: 2018-10-27
 * Time: 09:15
 */

namespace Geekhub\Lesson3\Controller\Demonstration;
use Magento\Framework\Controller\ResultFactory;
class JsonResponse extends \Magento\Framework\App\Action\Action
{
    /**
     * @return \Magento\Framework\App\ResponseInterface|\Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {
        /** @var \Magento\Framework\Controller\Result\Json $controllerResult */
        $controllerResult = $this->resultFactory->create(ResultFactory::TYPE_JSON);
        // todo create response

        $data = ['defaultRotesIs' => "Default Router Is"];
        return $controllerResult->setData($data);
    }
}
