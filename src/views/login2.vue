<template>
    <div class="login">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
            <el-tab-pane label="用户名" name="first" class="panel-username">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="请输入用户名"
                            prefix-icon="el-icon-user"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"
                            prefix-icon="el-icon-unlock"></el-input>
                    </el-form-item>
                    <el-form-item prop="answer">
                        <div style="display:flex;flex-wrap:nowrap;">
                            <el-input v-model="ruleForm.answer" placeholder="答案" prefix-icon="el-icon-s-claim">
                            </el-input>
                            <el-button style="margin-left: 10px;">
                                {{ code.firstValue }} + {{ code.lastValue }} = ?
                            </el-button>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submitLoginForm('ruleForm')" class="login-btn">登录</el-button>
                    </el-form-item>
                </el-form>

            </el-tab-pane>
            <el-tab-pane label="手机号" name="second" class="panel-phone">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form">
                    <el-form-item prop="phone">
                        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="请输入手机号"
                            prefix-icon="el-icon-mobile-phone"></el-input>
                    </el-form-item>

                    <el-form-item prop="sms">
                        <div style="display: flex; flex-wrap:nowrap;">
                            <el-input v-model.number="ruleForm.password" placeholder="请输入验证码"
                                prefix-icon="el-icon-s-claim"></el-input>
                            <el-button>获取验证码</el-button>
                        </div>
                    </el-form-item>

                    <el-form-item>
                        <el-button @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
                    </el-form-item>
                </el-form>

            </el-tab-pane>

        </el-tabs>

    </div>

</template>

<script>
let firstValue = ~~(Math.random() * 10);
let lastValue = ~~(Math.random() * 30);

export default {
    data() {
        var validateUsename = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                if (this.ruleForm.username !== '') {
                    this.$refs.ruleForm.validateField('usename');
                }
                callback();
            }
        };
        var validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.password !== '') {
                    console.log(value)
                    this.$refs.ruleForm.validateField('password');
                }
                callback();
            }
        };

        var validateAnswer = (rule, value, callback) => {
            console.log(value);
            let sum = firstValue + lastValue;
            console.log('sum', sum)

            if (value === '') {
                callback(new Error('请输入答案'));
            } else if (value != sum) {

                callback(new Error('答案错误'));
            } else {
                this.$refs.ruleForm.validateField('answer');
                callback();
            }
        };
        return {
            code: {
                firstValue: firstValue,
                lastValue: lastValue,
                // total: firstValue + lastValue
            },
            activeName: 'first',
            ruleForm: {
                username: '',
                password: '',
                answer: ''
            },
            rules: {
                username: [
                    { validator: validateUsename, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                answer: [
                    { validator: validateAnswer, trigger: 'blur' }
                ],
            }
        };
    },
    computed: {

    },
    methods: {
        submitLoginForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');

                    this.$axios.get('https://iam-uat.yuexiuproperty.cn/idp/restful/IDPAuthenticate', {
                        appId: 'BIMDesign1',
                        userName: 'zhuyuntest1',
                        password: 'Yxdc123456',
                        authnMethod: 'UsernamePassword',
                        remotelp: '0.0.0.1'
                    }).then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log(err);
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    mounted() {

    }
}
</script>

<style>
.login {
    display: block;

    width: 300px;
    height: 280px;
    /* margin: auto; */
    /* background-color: red; */
    position: absolute;
    top: calc(50% - 150px);
    left: calc(50% - 150px);
    background-color: aqua;
}

.login .login-form {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.login .login-form .login-btn {
    width: 100%;
    background-color: #E2971E;
    border: 1px solid #E2971E;
    color: #FFFFFF;
    font-size: 18px;
}

.el-tabs__item.is-active {
    color: #E2971E !important;
}

.el-tabs__item {
    padding: 0px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    margin: 20px 40px 0px 40px;
    width: 50%;
}

.el-tabs__nav {
    white-space: nowrap;
    position: relative;
    transition: transform .3s;
    float: left;
    z-index: 2;
}

.el-tabs__active-bar .is-top {
    width: 100% !important;
    ;

}

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #a76b0b;
    background-color: #FFF;
    border-right-color: #DCDFE6;
    border-left-color: #DCDFE6;
}
</style>