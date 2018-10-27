<?php
/**
 * Created by PhpStorm.
 * User: alexboyko
 * Date: 2018-10-27
 * Time: 09:18
 */

namespace Geekhub\Lesson3\Controller\Demonstration;

use Magento\Framework\Controller\ResultFactory;


class ShowPerson extends \Magento\Framework\App\Action\Action
{
    /**
     * @return \Magento\Framework\App\ResponseInterface|\Magento\Framework\Controller\ResultInterface|\Magento\Framework\View\Result\Page
     */
    public function execute()
    {
        $name = "Oleksiy";
        $lastName = "Boyko";

        $resultPage = $this->resultFactory->create(ResultFactory::TYPE_PAGE);
        $resultPage->getLayout()
            ->getBlock('boyko.person.page.details')
            ->setPersonName($name)
            ->setPersonLastNAme($lastName);
        return $resultPage;
    }
}
