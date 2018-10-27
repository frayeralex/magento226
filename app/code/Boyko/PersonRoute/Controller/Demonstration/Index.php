<?php
/**
 * Created by PhpStorm.
 * User: alexboyko
 * Date: 2018-10-27
 * Time: 09:14
 */

namespace Geekhub\Lesson3\Controller\Demonstration;
class Index extends \Magento\Framework\App\Action\Action
{
    /**
     * @return \Magento\Framework\App\ResponseInterface|\Magento\Framework\Controller\ResultInterface|void
     */
    public function execute()
    {
        $this->_view->loadLayout();
        $this->_view->renderLayout();
    }
}
