const Core = require('@alicloud/pop-core')

// 短信
const client = new Core({
  accessKeyId: 'LTAI4G874cLPGZvJaTNoXgfZ',
  accessKeySecret: 'xSOW4JE8DXnEloBcEL6IP5QyQ3l8bc',
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25'
})

const params = {
  PhoneNumbers: '18725944157',
  SignName: '个人消息聚合服务',
  TemplateCode: 'SMS_200675117',
  TemplateParam: JSON.stringify({
    title: 'svn',
    text: 'zzz'
  })
}

const requestOption = {
  method: 'POST'
}

client.request('SendSms', params, requestOption).then(result => {
  console.log('JSON.stringify(result)', JSON.stringify(result))
}, ex => {
  console.log('ex', ex)
})
