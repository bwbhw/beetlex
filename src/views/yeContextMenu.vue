<template>
    <div id="ctxMenu">
    <ul >
        <li v-for="(item, index) in contextMenuOptions">{{ item.value }}</li>
    </ul>    
</div>
</template>

<script>

    export default { 
        props: {
            isVisiable: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                name_rules: [{ required: true, message: '值不能为空！', trigger: 'blur' },],
                record: {
                    name: null,
                },
                // hello: new beetlexAction('/hello', null, ''),        
                contextMenuOptions: [
                    {
                        value: '创建子项',
                        label: '标签1'
                    },
                    {
                        value: '删除项',
                        label: '标签2'
                    },
                    {
                        value: '重命名项',
                        label: '标签3'
                    },
                    {
                        value: '上传文件',
                        label: '标签4'
                    },
                    {
                        value: '批量添加属性',
                        label: '标签5'
                    },
                    {
                        value: '批量删除属性',
                        label: '标签5'
                    },
                ]
            };
        },
        methods: {
            setNodeVisiable(value) {
                let node = document.getElementById("ctxMenu");
                console.log("子组件执行了")
                node.style.display = value;
                console.log(node.attributes)
            }
        },
        mounted() {
          
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }
   #ctxMenu {
       display: none;
       width: 100px;
       height:auto;
       position:absolute;
       z-index:999;

   }
</style>