<?php
/**
 * Created by PhpStorm.
 * User: alexboyko
 * Date: 2018-10-27
 * Time: 09:15
 */

namespace Boyko\PersonRoute\Controller\Demonstration;

use Magento\Framework\Controller\ResultFactory;

class Json extends \Magento\Framework\App\Action\Action
{
    /**
     * @return \Magento\Framework\App\ResponseInterface|\Magento\Framework\Controller\ResultInterface
     */
    public function execute()
    {
        /** @var \Magento\Framework\Controller\Result\Json $controllerResult */
        $controllerResult = $this->resultFactory->create(
            ResultFactory::TYPE_JSON
        );

        $data = [
            'person' => [
                'firstName' => 'Oleksiy',
                'secondName' => 'Boyko'
            ]
        ];
        return $controllerResult->setData($data);
    }
}
