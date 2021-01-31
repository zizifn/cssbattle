# CSSBattle #8 Tesseract

## 题目图案

本文是 [#9 Tesseract](https://cssbattle.dev/play/9)，实现一个 tesseract（宇宙魔方）。

![#9 Tesseract](../img/9.png)

主要使用的属性是:

1. **flex**
2. **border-radius**
3. **box-shadow**

## 解决方案动画演示

![#9 Tesseract GIF](../img/9.gif)

## 解决方案步骤

主要解决思路是，用三个`div`分别表示叉头，叉身，叉柄，然后用 flexbox 排成列，再使用`box-shadow`复制叉尖，最后使用`border-radius`弯曲叉身。

### 1. body 使用 display:flex， 创建三个`div`，然后排成一列，然后居中

### 2. 使用`box-shadow`复制叉尖

这里先使用`border-radius`把长方形的四个角变圆，然后使用`box-shadow`复制叉尖。注意和背景颜色一样的 shadow 就是叉子之间的空隙。 所以这里有 6 个阴影。然后需要把叉尖向下移动 10px。

`border-radius` 可以为 4 个角，分别设置弯曲。 [MDN border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius) [MDN box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

### 3. 使用`box-shadow` 把叉身的左下和右下的边角变圆

```css
border-radius: 0 0 70px 70px;
```

### 4. 最后微调下叉柄的上下高度和位置

## Source Code

```CSS
    <div class="contianer">
        <div class="square"></div>
        <div class="square2"></div>
        <div class="cycle"></div>
    </div>
    <style>
        body {
            background: #222730;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
        }

        .contianer {
            height: 150px;
            width: 100%;
            background: #4CAAB3;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .square {
            position: absolute;
            height: 250px;
            width: 250px;
            background: #222730;
            transform: rotate(45deg);
        }

        .square2 {
            position: absolute;
            height: 150px;
            width: 150px;
            background: #4CAAB3;
            transform: rotate(45deg);
        }

        .cycle {
            position: absolute;
            height: 50px;
            width: 50px;
            background: #393E46;
            border-radius: 50%
        }
    </style>
```
