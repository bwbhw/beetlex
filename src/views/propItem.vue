<template>
    <div>
        <h6 class="right-aside-header">属性栏</h6>
        <el-container class="right-aside">
            <el-main class="main">

                <!--<el-select  placeholder="请选择">
                <el-option v-for="item in options":key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>-->
                <select name="sinput" class="select-type">
                    <option v-for="(item, index) in selectOptions" :key="index">{{ item.value }}</option>
                </select>

            </el-main>
            <el-footer class="footer">
                <el-button class="btn">载入项目</el-button>
            </el-footer>
        </el-container>
    </div>
</template>

<script>

export default {
    props: [],
    data() {
        return {
            name_rules: [{ required: true, message: '值不能为空！', trigger: 'blur' },],
            record: {
                name: null,
            },
            //hello: new beetlexAction('/hello', null, ''),

            treeData: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            },
            {
                label: '一级 4',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            },
            {
                label: '一级 5',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            },
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            selectOptions: [
                {
                    value: '选项1',
                    label: '黄金糕'
                }
            ]
        };
    },
    methods: {
        submitForm() {
            this.$refs['dataform'].validate((valid) => {
                if (valid) {
                    this.hello.asyncget(this.record).then(r => {
                        this.resetForm();
                    });
                }
            });
        },
        resetForm() {
            this.$refs['dataform'].resetFields();
        },
        handleNodeClick(data) {
            console.log(data);
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

.right-aside-header {
    border: 1px solid #EEEEEE;
    background-color: #EEEEEE;
    margin-bottom: 5px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;

    color: #333333;
}

.right-aside {
    display: block;
    min-height: 100%;
}




.right-aside .main {
    display: block;
    height: 80%;
    border: 1px solid #EEEEEE;
    background-color: #EEEEEE;
    border-radius: 5px;
    padding: 5px;
}

.right-aside .main .select-type {
    width: 100%;
    height: 40px;
    border-radius: 5px;
}

.right-aside .footer {
    margin-top: 5px;
}

.right-aside .footer {
    padding: 0;
}

.right-aside .footer .btn {
    width: 100%;
    height: 30px;
    background: #477BF4;
    color: white;
    font-size: 12px;
    padding: 0;
}
</style>