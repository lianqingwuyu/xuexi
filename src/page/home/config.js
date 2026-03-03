export const data = [
    {
        //type 0 单选 1 多选 2 判断
        type:0,
        title:'下列哪些是背景颜色',
        options: [
            {
                name: 'background-color',
                value: 'background-color'
            },
            {
                name: 'background',
                value: 'background'
            },
            {
                name: 'background-image',
                value: 'background-image'
            },
            {
                name: 'background-size',
                value: 'background-size'
            }
        ],
        // 提示
        tips: 'background-color 是背景颜色',
        // 答案
        answer: ['background-color']
    },
    {
        //type 0 单选
        type: 0,
        title: '以下哪个 CSS 属性用于设置字体大小',
        options: [
            {
                name: 'font-style',
                value: 'font-style'
            },
            {
                name: 'font-size',
                value: 'font-size'
            },
            {
                name: 'text-size',
                value: 'text-size'
            },
            {
                name: 'size',
                value: 'size'
            }
        ],
        tips: 'font-size 用于控制字体大小',
        answer: ['font-size']
    },
    {
        //type 0 单选
        type: 0,
        title: '如何使文本水平居中',
        options: [
            {
                name: 'text-align: center',
                value: 'text-align: center'
            },
            {
                name: 'vertical-align: middle',
                value: 'vertical-align: middle'
            },
            {
                name: 'align-items: center',
                value: 'align-items: center'
            },
            {
                name: 'justify-content: center',
                value: 'justify-content: center'
            }
        ],
        tips: 'text-align 用于设置文本的水平对齐方式',
        answer: ['text-align: center']
    },
    {
        //type 0 单选
        type: 0,
        title: '以下哪个单位是相对长度单位',
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
                name: 'pt',
                value: 'pt'
            },
            {
                name: 'cm',
                value: 'cm'
            }
        ],
        tips: 'em 是相对于父元素字体大小的相对单位',
        answer: ['em']
    },
    {
        //type 0 单选
        type: 0,
        title: '如何去除链接的下划线',
        options: [
            {
                name: 'text-decoration: none',
                value: 'text-decoration: none'
            },
            {
                name: 'border: none',
                value: 'border: none'
            },
            {
                name: 'underline: false',
                value: 'underline: false'
            },
            {
                name: 'decoration: no-line',
                value: 'decoration: no-line'
            }
        ],
        tips: 'text-decoration: none 可以移除文本装饰（如下划线）',
        answer: ['text-decoration: none']
    },
    {
        //type 1 多选
        type: 1,
        title: '以下哪些是有效的 CSS 选择器',
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
                name: '@keyframes',
                value: '@keyframes'
            }
        ],
        tips: '.class、#id、element 都是选择器，@keyframes 是关键帧规则',
        answer: ['.class', '#id', 'element']
    },
    {
        //type 1 多选
        type: 1,
        title: '以下哪些属性可以设置元素的外边距',
        options: [
            {
                name: 'margin',
                value: 'margin'
            },
            {
                name: 'padding',
                value: 'padding'
            },
            {
                name: 'margin-top',
                value: 'margin-top'
            },
            {
                name: 'border',
                value: 'border'
            }
        ],
        tips: 'margin 和 margin-top 都是外边距属性',
        answer: ['margin', 'margin-top']
    },
    {
        //type 1 多选
        type: 1,
        title: 'Flexbox 布局中，以下哪些是有效的 justify-content 值',
        options: [
            {
                name: 'flex-start',
                value: 'flex-start'
            },
            {
                name: 'center',
                value: 'center'
            },
            {
                name: 'space-between',
                value: 'space-between'
            },
            {
                name: 'middle',
                value: 'middle'
            }
        ],
        tips: 'justify-content 用于设置主轴上的对齐方式',
        answer: ['flex-start', 'center', 'space-between']
    },
    {
        //type 1 多选
        type: 1,
        title: '以下哪些是 CSS 的盒模型组成部分',
        options: [
            {
                name: 'content',
                value: 'content'
            },
            {
                name: 'padding',
                value: 'padding'
            },
            {
                name: 'border',
                value: 'border'
            },
            {
                name: 'outline',
                value: 'outline'
            }
        ],
        tips: '盒模型包括 content、padding、border、margin',
        answer: ['content', 'padding', 'border']
    },
    {
        //type 2 判断
        type: 2,
        title: 'CSS 中的 margin 属性可以接受负值',
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
        tips: 'margin 可以设置为负值来实现特殊的布局效果',
        answer: ['true']
    },
    {
        //type 2 判断
        type: 2,
        title: 'display: none 和 visibility: hidden 的效果完全相同',
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
        tips: 'display:none 不占空间，visibility:hidden 仍占空间',
        answer: ['false']
    },
    {
        //type 2 判断
        type: 2,
        title: 'position: fixed 元素会相对于浏览器窗口定位',
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
        tips: 'fixed 定位相对于浏览器窗口（视口）',
        answer: ['true']
    },
    {
        //type 2 判断
        type: 2,
        title: 'position: fixed 元素会相对于浏览器窗口定位',
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
        tips: 'fixed 定位相对于浏览器窗口（视口）',
        answer: ['true']
    },
    {
        //type 2 判断
        type: 2,
        title: 'position: fixed 元素会相对于浏览器窗口定位',
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
        tips: 'fixed 定位相对于浏览器窗口（视口）',
        answer: ['true']
    },
    {
        //type 2 判断
        type: 2,
        title: 'position: fixed 元素会相对于浏览器窗口定位',
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
        tips: 'fixed 定位相对于浏览器窗口（视口）',
        answer: ['true']
    },
    {
        //type 2 判断
        type: 2,
        title: 'position: fixed 元素会相对于浏览器窗口定位',
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
        tips: 'fixed 定位相对于浏览器窗口（视口）',
        answer: ['true']
    },
]