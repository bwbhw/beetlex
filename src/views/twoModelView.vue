<template>
    <div class="two-model-container">
        <div class="item">
            <div class="sub-item">
                <div class="body">

                </div>
                <div class="footer">
                    <p class="title">标题1</p>
                    <el-button class="btn" type="text">+</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
.two-model-container {
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}

.two-model-container .item {
    width: 162px;
    height: 162px;
    padding: 10px;
    padding-top: 5px;
}

.item:hover {
    background-color: #EEEEEE;
}

.two-model-container .item .sub-item {
    width: 160px;
    height: 160px;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    background-color: white;
}



.two-model-container .item .sub-item .body {
    height: 60%;
    border-bottom: 1px solid #EEEEEE;
}


.two-model-container .item .sub-item .footer {
    padding: 5px;
}

.two-model-container .item .sub-item .footer .title {
    font-size: 12px;
    height: 50%;
    text-align: center;
}

.two-model-container .item .sub-item .footer .btn {
    color: #333333;
}
</style>