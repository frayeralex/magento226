<?php

namespace Boyko\CustomWidget\Block\Widget;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class Button extends Template implements BlockInterface
{
    /**
     * @var string
     */
    protected $_template = "widget/button.phtml";
}
