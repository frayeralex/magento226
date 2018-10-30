<?php
/**
 * Created by PhpStorm.
 * User: alexboyko
 * Date: 2018-10-27
 * Time: 09:22
 */

namespace Boyko\PersonRoute\Block;


class CustomBlock extends \Magento\Framework\View\Element\Template
{
    const PERSON_DETAILS_TEMPLATE = "Boyko_PersonRoute::person/detailsTemplate.phtml";
    /**
     * add custom template
     */
    protected function _prepareLayout()
    {
        parent::_prepareLayout();
        $this->setTemplate(self::PERSON_DETAILS_TEMPLATE);
        return $this;
    }

    public function getDefaultRouterLink() {
        return $this->getUrl('boyko_personroute/demonstration/json');
    }
}
