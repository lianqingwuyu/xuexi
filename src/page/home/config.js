export const data = [
    // {
    //     //type 0 单选 1 多选 2 判断
    //     type:0,
    //     title:'下列哪些是背景颜色',
    //     options: [
    //         {
    //             name: 'background-color',
    //             value: 'background-color'
    //         },
    //         {
    //             name: 'background',
    //             value: 'background'
    //         },
    //         {
    //             name: 'background-image',
    //             value: 'background-image'
    //         },
    //         {
    //             name: 'background-size',
    //             value: 'background-size'
    //         }
    //     ],
    //     // 提示
    //     tips: 'background-color 是背景颜色',
    //     // 答案
    //     answer: ['background-color']
    // },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: '下列哪个属性用于设置字体大小',
        options: [
            {
                name: 'font-size',
                value: 'font-size'
            },
            {
                name: 'text-size',
                value: 'text-size'
            },
            {
                name: 'font-style',
                value: 'font-style'
            },
            {
                name: 'text-style',
                value: 'text-style'
            }
        ],
        // 提示
        tips: 'font-size 用于设置字体大小',
        // 答案
        answer: ['font-size']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 1,
        title: '下列哪些属性可以设置文字加粗',
        options: [
            {
                name: 'font-weight',
                value: 'font-weight'
            },
            {
                name: 'bold',
                value: 'bold'
            },
            {
                name: 'font-style',
                value: 'font-style'
            },
            {
                name: 'text-decoration',
                value: 'text-decoration'
            }
        ],
        // 提示
        tips: 'font-weight 用于设置字体粗细，bold 是其中一个值',
        // 答案
        answer: ['font-weight', 'bold']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: '哪个属性用于设置文本对齐方式',
        options: [
            {
                name: 'text-align',
                value: 'text-align'
            },
            {
                name: 'align-text',
                value: 'align-text'
            },
            {
                name: 'vertical-align',
                value: 'vertical-align'
            },
            {
                name: 'text-indent',
                value: 'text-indent'
            }
        ],
        // 提示
        tips: 'text-align 用于设置文本水平对齐',
        // 答案
        answer: ['text-align']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 2,
        title: 'color 属性可以同时设置文字颜色和背景颜色',
        options: [
            {
                name: '正确',
                value: 'true'
            },
            {
                name: '错误',
                value: 'false'
            }
        ],
        // 提示
        tips: 'color 属性只设置文字颜色，背景颜色使用 background-color',
        // 答案
        answer: ['false']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 1,
        title: '下列哪些属性会影响文字的显示效果',
        options: [
            {
                name: 'text-decoration',
                value: 'text-decoration'
            },
            {
                name: 'letter-spacing',
                value: 'letter-spacing'
            },
            {
                name: 'line-height',
                value: 'line-height'
            },
            {
                name: 'word-spacing',
                value: 'word-spacing'
            }
        ],
        // 提示
        tips: '所有选项都可以影响文字的显示效果',
        // 答案
        answer: ['text-decoration', 'letter-spacing', 'line-height', 'word-spacing']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: 'CSS 盒子模型中不包括以下哪个部分',
        options: [
            {
                name: 'content',
                value: 'content'
            },
            {
                name: 'border',
                value: 'border'
            },
            {
                name: 'outline',
                value: 'outline'
            },
            {
                name: 'margin',
                value: 'margin'
            }
        ],
        // 提示
        tips: '盒子模型包括 content、padding、border、margin',
        // 答案
        answer: ['outline']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 1,
        title: '以下哪些值可以设置 display 属性实现 Flex 布局',
        options: [
            {
                name: 'flex',
                value: 'flex'
            },
            {
                name: 'inline-flex',
                value: 'inline-flex'
            },
            {
                name: 'block',
                value: 'block'
            },
            {
                name: 'inline-block',
                value: 'inline-block'
            }
        ],
        // 提示
        tips: 'flex 和 inline-flex 可以创建 Flex 容器',
        // 答案
        answer: ['flex', 'inline-flex']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: 'position 的哪个值可以让元素相对于浏览器窗口固定定位',
        options: [
            {
                name: 'absolute',
                value: 'absolute'
            },
            {
                name: 'relative',
                value: 'relative'
            },
            {
                name: 'fixed',
                value: 'fixed'
            },
            {
                name: 'sticky',
                value: 'sticky'
            }
        ],
        // 提示
        tips: 'fixed 定位相对于浏览器窗口',
        // 答案
        answer: ['fixed']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 2,
        title: 'padding 属性可以接受负值',
        options: [
            {
                name: '正确',
                value: 'true'
            },
            {
                name: '错误',
                value: 'false'
            }
        ],
        // 提示
        tips: 'padding 不能为负值',
        // 答案
        answer: ['false']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 1,
        title: '以下哪些是 CSS 选择器',
        options: [
            {
                name: '.class',
                value: '.class'
            },
            {
                name: '#id',
                value: '#id'
            },
            {
                name: 'element',
                value: 'element'
            },
            {
                name: '::before',
                value: '::before'
            }
        ],
        // 提示
        tips: '所有选项都是 CSS 选择器',
        // 答案
        answer: ['.class', '#id', 'element', '::before']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: 'z-index 属性用于控制什么',
        options: [
            {
                name: '元素的透明度',
                value: 'opacity'
            },
            {
                name: '元素的层叠顺序',
                value: 'stack-order'
            },
            {
                name: '元素的大小',
                value: 'size'
            },
            {
                name: '元素的位置',
                value: 'position'
            }
        ],
        // 提示
        tips: 'z-index 控制元素的层叠顺序',
        // 答案
        answer: ['stack-order']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 1,
        title: '以下哪些属性可以用于 Grid 网格布局',
        options: [
            {
                name: 'grid-template-columns',
                value: 'grid-template-columns'
            },
            {
                name: 'grid-gap',
                value: 'grid-gap'
            },
            {
                name: 'flex-direction',
                value: 'flex-direction'
            },
            {
                name: 'grid-row',
                value: 'grid-row'
            }
        ],
        // 提示
        tips: 'flex-direction 是 Flex 布局的属性',
        // 答案
        answer: ['grid-template-columns', 'grid-gap', 'grid-row']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: 'overflow: hidden 的作用是什么',
        options: [
            {
                name: '显示滚动条',
                value: 'show-scrollbar'
            },
            {
                name: '隐藏溢出内容',
                value: 'hide-overflow'
            },
            {
                name: '自动调整大小',
                value: 'auto-size'
            },
            {
                name: '清除浮动',
                value: 'clear-float'
            }
        ],
        // 提示
        tips: 'overflow: hidden 会隐藏超出容器的内容',
        // 答案
        answer: ['hide-overflow']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 2,
        title: 'border-radius 属性可以设置圆角',
        options: [
            {
                name: '正确',
                value: 'true'
            },
            {
                name: '错误',
                value: 'false'
            }
        ],
        // 提示
        tips: 'border-radius 用于设置圆角边框',
        // 答案
        answer: ['true']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 1,
        title: '以下哪些单位可以用于设置字体大小',
        options: [
            {
                name: 'px',
                value: 'px'
            },
            {
                name: 'em',
                value: 'em'
            },
            {
                name: 'rem',
                value: 'rem'
            },
            {
                name: '%',
                value: '%'
            }
        ],
        // 提示
        tips: '所有选项都可以用于设置字体大小',
        // 答案
        answer: ['px', 'em', 'rem', '%']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: 'transform: rotate(45deg) 会让元素旋转多少度',
        options: [
            {
                name: '45 度',
                value: '45'
            },
            {
                name: '90 度',
                value: '90'
            },
            {
                name: '180 度',
                value: '180'
            },
            {
                name: '360 度',
                value: '360'
            }
        ],
        // 提示
        tips: 'rotate(45deg) 表示旋转 45 度',
        // 答案
        answer: ['45']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 1,
        title: '以下哪些属性可以设置过渡效果',
        options: [
            {
                name: 'transition-property',
                value: 'transition-property'
            },
            {
                name: 'transition-duration',
                value: 'transition-duration'
            },
            {
                name: 'animation-name',
                value: 'animation-name'
            },
            {
                name: 'transition-timing-function',
                value: 'transition-timing-function'
            }
        ],
        // 提示
        tips: 'animation-name 属于动画属性',
        // 答案
        answer: ['transition-property', 'transition-duration', 'transition-timing-function']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 0,
        title: 'visibility: hidden 和 display: none 的区别是什么',
        options: [
            {
                name: '没有区别',
                value: 'no-difference'
            },
            {
                name: 'hidden 仍占位，none 不占位',
                value: 'hidden-space'
            },
            {
                name: 'none 仍占位，hidden 不占位',
                value: 'none-space'
            },
            {
                name: '效果完全相反',
                value: 'opposite'
            }
        ],
        // 提示
        tips: 'visibility: hidden 元素不可见但仍占据空间，display: none 元素完全不渲染',
        // 答案
        answer: ['hidden-space']
    },
    {
        //type 0 单选 1 多选 2 判断
        type: 2,
        title: 'CSS 中可以使用!important 提升样式优先级',
        options: [
            {
                name: '正确',
                value: 'true'
            },
            {
                name: '错误',
                value: 'false'
            }
        ],
        // 提示
        tips: '!important 可以提升样式优先级',
        // 答案
        answer: ['true']
    }
]