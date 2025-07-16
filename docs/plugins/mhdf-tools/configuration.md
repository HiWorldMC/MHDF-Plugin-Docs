---
sidebar_position: 3
---

# 配置

:::tip

**可从右侧目录选择相应配置文件**

:::


## config.yml

```yaml
#########################################操作列表#########################################
# [connect]|<服务器>                                     ——切换服务器
# [player]|<命令>                                       ——玩家执行命令
# [player_op]|<命令>                                    ——玩家以op权限执行命令(注意保护)
# [console]|<命令>                                      ——后台执行命令
# [broadcast]|<消息>                                    ——发送全服消息
# [message]|<消息>                                      ——发送消息给玩家
# [actionbar]|<消息>                                    ——发送操作栏消息
# [bossbar]|<消息>|<颜色>|<样式>|<进度>|<显示时间>          ——给玩家发送一个限时boss血条
# [title]|<主标题>|<副标题>|<淡入时间>|<停留时间>|<淡出时间>  ——给玩家发送一个标题消息
# [chat]|<消息>                                         ——以玩家身份发送消息
# [sound_bukkit]|<音效ID>|<音量>|<音调>                   ——给玩家发送一个bukkit音效ID的音效
# [sound_minecraft]|<音效ID>|<音量>|<音调>                ——给玩家发送一个minecraft音效ID的音效
# [menu]|<菜单>                                         ——打开自定义菜单
# [close]                                              ——关闭菜单
#########################################操作列表#########################################
# 任意操作后面增加 <delay=[Tick]> 可以延迟操作
# 例如: [player]|say BaiShenYaoDog<delay=5>
#########################################操作列表#########################################
#
#########################################PAPI变量#########################################
# %mhdftools_nick_name%               ——匿名名称(如果没有,则返回默认ID)
# %mhdftools_money_amount%            ——经济数量
# %mhdftools_money_name%              ——货币名称
#########################################PAPI变量#########################################

# 配置文件版本号(请勿修改)
configVersion: "3.2.0"

# 调试模式
debug: false

# bStats https://bstats.org/plugin/bukkit/MHDF-Tools/24887
bStats: true

# 更新检测
updateCheck: false

# 群组
# 群组模式下必须使用redis缓存
bungeeCordSettings:
  # 开关
  enable: false
  # 自动重试
  autoTry:
    # 延迟(单位: ticks)
    delay: 10
    # 最大重试次数
    maxTimes: 5

# 数据库
databaseSettings:
  # 数据库类型
  # (mysql h2)
  type: "h2"
  # MySQL数据库
  mysql:
    # 地址
    host: "127.0.0.1:3306"
    # 数据库
    database: "mhdf_tools"
    # 用户
    user: "root"
    # 密码
    password: "root"
  # H2数据库
  h2:
    # 数据库文件
    file: "database.db"
  # 自定义连接参数
  prams:


# 缓存
cacheSettings:
  # 存储类型
  # (map redis)
  type: "map"
  # 服务池ID
  # 只有相同 服务池ID 服务器才会互相同步缓存
  server: ""
  # Redis数据库
  redis:
    # 地址
    host: "localhost:6379"
    # 用户
    user: ""
    # 密码
    password: ""

# 随机传送
randomTeleportSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "rtp"
    - "randomteleport"
  # 黑名单世界
  blackWorld: [ ]
  # 黑名单方块
  blackBlock:
    - "WATER"
    - "LAVA"
  # 最大重试次数
  maxTryTime: 10
  # 默认
  default:
    # 权重
    weight: 0
    # 最小
    min: 1000
    # 最大
    max: 1500
    # 延迟
    # 绕过权限: mhdftools.bypass.randomteleport.delay
    delay:
      # 开关
      enable: true
      # 时间(单位: 秒)
      time: 60
  # 拥有 mhdftools.group.randomteleport.<名字> 权限的提示
  # 例如 mhdftools.group.randomteleport.vip
  # !noUpdate
  vip:
    # 权重
    weight: 1
    # 最小
    min: 1000
    # 最大
    max: 1500
    # 延迟
    delay:
      # 开关
      enable: true
      # 时间(单位: 秒)
      time: 60

# 崩溃玩家客户端
crashSettings:
  # 开关
  enable: true
  # 默认崩溃模式
  # (explosion invalidTeleport invalidParticle)
  defaultType: "explosion"
  # 命令
  commands:
    - "crash"

# 击退玩家
knockBackSettings:
  #开关
  enable: true
  # 默认击退模式
  # (normal, random)
  defaultType: "normal"
  #击退的
  vector:
    x: 0.75
    y: 0.5
    z: 0.75
  # 命令
  commands:
    - "kb"
    - "knockback"

# 查看在线列表
listSettings:
  # 开关
  enable: true
  # 使用群组玩家列表
  useBungeeCordList: false
  # 命令
  commands:
    - "list"

# 飞行
flySettings:
  # 开关
  enable: true
  # 自动开启
  autoEnable:
    # 加入服务器
    joinServer: true
    # 切换世界
    changeWorld: true
    # 重生
    respawn: true
  # 自动关闭
  autoDisable:
    # 掉血
    takeHealth: false
    # 世界列表
    worldList:
      - "awa"
  # 飞行强制关闭坠落倒计时
  fallTime: 5
  # 命令
  commands:
    - "fly"
  # 限时飞行命令
  flytimeCommands:
    - "flytime"

# 隐身
vanishSettings:
  # 开关
  enable: true
  # 从补全中移除
  tabRemove: true
  # 命令
  commands:
    - "vanish"

# 更好的关服
stopSettings:
  # 开关
  enable: true
  # 确认关服
  confirm: true
  # 关闭服务器的时候保存存档
  autoSave: true
  # 默认倒计时(-1关闭)
  defaultCountdown: 5
  # 命令
  commands:
    - "stop"

# 传送到玩家
tpaSettings:
  # 开关
  enable: true
  # 延迟
  delay: 60
  # 命令
  commands:
    - "tpa"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 传送玩家过来
tpahereSettings:
  # 开关
  enable: true
  # 延迟
  delay: 60
  # 命令
  commands:
    - "tpahere"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 自定义菜单
customMenuSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "menu"

# 家系统
homeSettings:
  # 开关
  enable: true
  # 存在则替换家
  existReplace: true
  # 默认最大家数量
  # 可以通过 mhdftools.commands.home.max.<数量> 自定义
  defaultMax: 10
  # 命令
  commands:
    - "home"
  # 家命令
  sethomeCommands:
    - "sethome"
  # 删除家命令
  delhomeCommands:
    - "delhome"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 返回死亡点
backSettings:
  # 开关
  enable: true
  # 重生提示
  respawnMessage: true
  # 命令
  commands:
    - "back"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 返回传送前的位置
tpbackSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "tpback"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 出生点
spawnSettings:
  # 开关
  enable: true
  # 自动传送
  autoTeleport:
    # 复活
    respawn: false
    # 加入服务器
    join: false
  # 位置
  location:
    # 服务器
    server: "无"
    # 世界
    world: "world"
    # x轴坐标
    x: 0.0
    # y轴坐标
    y: 60.0
    # z轴坐标
    z: 0.0
    # yaw角度
    yaw: 0.0
    # pitch角度
    pitch: 0.0
  # 命令
  commands:
    - "spawn"
  setspawnCommands:
    - "setspawn"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 匿名
nickSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "nick"

# 查询IP信息
ipSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "ip"
    - "ipinfo"

# 切换游戏模式
gamemodeSettings:
  # 开关
  enable: true
  # 游戏模式
  gamemode:
    # 生存
    survival:
      - "survival"
      - "生存"
      - "0"
    # 创造
    creative:
      - "creative"
      - "创造"
      - "1"
    # 冒险
    adventure:
      - "adventure"
      - "冒险"
      - "2"
    # 旁观
    spectator:
      - "spectator"
      - "旁观"
      - "3"
  # tab补全
  tabCompleter:
    - "生存"
    - "创造"
    - "冒险"
    - "旁观"
  # 命令
  commands:
    - "gamemode"
    - "gm"

# 回到床的位置
bedSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "bed"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 自杀
suicideSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "suicide"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 帽子
# 直接在菜单中切换帽子权限: mhdftools.commands.hat.menu
hatSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "hat"

# 传送点系统
warpSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "warp"
  # 传送点命令
  setwarpCommands:
    - "setwarp"
  # 删除传送点命令
  delwarpCommands:
    - "delwarp"
  # 黑名单世界
  blackWorld:
    - "pvp"

# 快速使用
fastUseSettings:
  # 开关
  enable: true
  # 潜影盒(权限: mhdftools.fastuse.shulkerbox)
  shulkerBox: true
  # 末影箱(权限: mhdftools.fastuse.enderchest)
  enderChest: true
  # 工作台(权限: mhdftools.fastuse.craftingtable)
  craftingTable: true

# 修复1.13+三叉戟复制漏洞
tridentDupeFixSettings:
  # 开关
  enable: true

# 修复1.21+收纳袋崩服漏洞
bundleFixSettings:
  # 开关
  enable: true

# 快速调节时间
fastChangeTimeSettings:
  # 开关
  enable: true
  # 时间
  time:
    # 自定义命名
    早上:
      # 时间
      time: 1000
      # 命令
      commands:
        - "day"
    # 自定义命名
    晚上:
      # 时间
      time: 13000
      # 命令
      commands:
        - "night"

# 快速调节天气
fastChangeWeatherSettings:
  # 开关
  enable: true
  # 时间
  weather:
    # 自定义命名
    晴天:
      # 下雨
      storm: false
      # 打雷
      thunder: false
      # 命令
      commands:
        - "sun"

# 虚假调节时间
fakeChangeTimeSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "fakeChangeTime"

# 背包查看
invseeSettings:
  # 开关
  enable: true
  # 命令
  commands:
    - "inv"
    - "invsee"

# 屏蔽
ignoreSettings:
  # 开关
  enable: true
  # 禁止屏蔽列表
  # 绕过权限: mhdftools.bypass.ignore.blacklist
  blacklist:
    - "BaiShenYao_Dog"
  # 命令
  commands:
    - "ignore"

# 聊天
chatSettings:
  # 开关
  enable: true
  # 聊天延迟
  # 绕过权限: mhdftools.bypass.chat.delay
  delay:
    # 开关
    enable: true
    # 延迟
    delay: 3
  # 禁止刷屏
  # 绕过权限: mhdftools.bypass.chat.spam
  spam:
    # 开关
    enable: true
  # 替换词
  # 绕过权限: mhdftools.bypass.chat.replaceWord
  replaceWord:
    # 开关
    enable: true
    # 替换
    replace:
      - # 文本
        word:
          - '((https|http)?://)[^\s]+'
        # 替换方式
        # word  ——替换目标词
        # line  ——替换整句
        type: "word"
        # 使用正则匹配
        regex: true
        # 绕过
        bypass:
          # 开关
          enable: false
        # 替换后的文本
        replaceWord: "<click:open_url:'{value}'><hover:show_text:'<#EAE4FF>点击打开网页'>{value}</hover></click>"
      - # 文本
        word:
          - "傻逼"
        # 替换方式
        # word  ——替换目标词
        # line  ——替换整句
        type: "line"
        # 使用正则匹配
        regex: false
        # 绕过
        bypass:
          # 开关
          enable: true
          # 权限
          permission: "mhdftools.bypass.chat.blackword"
        # 替换后的句子(随机选择)
        lineList:
          - "你好帅"
  # 展示物品
  showItem:
    # 开关
    enable: true
    # 格式
    format: "<click:run_command:'/lookitem {uuid}'>&7[&f{name} <#EAE4FF>x{amount}&7]"
    # 关键词
    word:
      - "[i]"
    # 移除缓存时间(单位: 秒)
    removeCache: 60
    # 命令
    commands:
      - "lookitem"
  # 展示背包
  showInventory:
    # 开关
    enable: true
    # 格式
    format: "<click:run_command:'/lookinventory {uuid}'>&7[&f{player} <#EAE4FF>的背包&7]"
    # 关键词
    word:
      - "[inv]"
    # 移除缓存时间(单位: 秒)
    removeCache: 60
    # 命令
    commands:
      - "lookinventory"
  # 展示末影箱
  showEnderChest:
    # 开关
    enable: true
    # 格式
    format: "<click:run_command:'/lookenderchest {uuid}'>&7[&f{player} <#EAE4FF>的末影箱&7]"
    # 关键词
    word:
      - "[ec]"
    # 移除缓存时间(单位: 秒)
    removeCache: 60
    # 命令
    commands:
      - "lookenderchest"
  # 私聊
  msg:
    # 开关
    enable: true
    # 命令
    commands:
      - "w"
      - "msg"
      - "tell"
    # 回复
    replyCommands:
      - "r"
      - "reply"
  # at
  at:
    # 开关
    enable: true
    # 匹配正则 @{
    patternFormat: "@?{at}"
    # 全体消息的关键词
    # 全体消息权限: mhdftools.chat.all
    allMessage:
      - "all"
  # 格式
  # 聊天颜色权限: mhdftools.chat.color
  # 聊天miniMessage格式权限: mhdftools.chat.minimessage
  format:
    # 开关
    enable: true
    # 默认
    default:
      # 权重
      weight: 0
      # 格式
      format: "&f[玩家] {player}&f: {message}"
    # 拥有 mhdftools.group.chatformat.<名字> 权限的提示
    # 例如 mhdftools.group.chatformat.admin
    # !noUpdate
    admin:
      # 权重
      weight: 1
      # 格式
      format: "&c[管理] {player}&f: {message}"

# 经济系统
economySettings:
  # 开关
  enable: true
  # 默认货币数量
  default: 1000.0
  # 货币名称
  name: "金币"
  # 个人所得税
  personalIncomeTax:
    # 开关
    enable: true
    # 税率(单位: 百分比)
    rate: 0.05
  # 经济管理命令
  moneyadminCommands:
    - "moneyadmin"
    - "eco"
  # 查询余额命令
  moneyCommands:
    - "money"
  # 转账命令
  payCommands:
    - "pay"

# 进服消息
joinMessageSettings:
  # 开关
  enable: true
  # 移除消息
  removeMessage: false
  # 默认
  default:
    # 权重
    weight: 0
    # 提示消息
    message: "&a[+] &e{player}"
  # 拥有 mhdftools.group.joinmessage.<名字> 权限的提示
  # 例如 mhdftools.group.joinmessage.admin
  # !noUpdate
  admin:
    # 权重
    weight: 1
    # 提示消息
    message: "&a[+] &c{player}"

# 退服消息
quitMessageSettings:
  # 开关
  enable: true
  # 移除消息
  removeMessage: false
  # 默认
  default:
    # 权重
    weight: 0
    # 提示消息
    message: "&c[-] &e{player}"
  # 拥有 mhdftools.group.quitmessage.<名字> 权限的提示
  # 例如 mhdftools.group.quitmessage.admin
  # !noUpdate
  admin:
    # 权重
    weight: 1
    # 提示消息
    message: "&c[-] &c{player}"

# 事件操作
eventActionSettings:
  # 开关
  enable: true
  # 操作列表
  actionList:
    # 操作ID
    # !noUpdate
    playerJoin:
      # 事件
      # =========================================
      # 玩家加入服务器 玩家退出服务器 玩家切换世界 玩家聊天
      # 玩家死亡 玩家复活 玩家移动 玩家传送 玩家破坏方块
      # 玩家放置方块
      # =========================================
      event: "玩家加入服务器"
      # 白名单世界
      # world:
      #  - "world"
      group:
        # 默认
        default:
          # 权重
          weight: 0
          # 操作
          action:
            - "[message]|&e你好,欢迎加入服务器~"
        # 拥有 mhdftools.group.eventaction.<操作ID>.<名字> 权限的提示
        # 例如 mhdftools.group.eventaction.<操作ID>.admin
        admin:
          # 权重
          weight: 1
          # 操作
          action:
            - "[message]|&e管理员你好,今天的工作开始了呢~"

# 时间操作
timeActionSettings:
  # 开关
  enable: true
  # 操作列表
  actionList:
    # 自定义命名
    # !noUpdate
    message:
      # 类型
      # =========================================
      # 定时操作 ——每多久操作一次
      # 定点操作 ——指定时间操作一次
      # =========================================
      type: "定时操作"
      # 时间(时:分:秒)
      time: "0:0:15"
      # 操作
      action:
        - "[broadcast]|&e感谢使用梦之工具~"
    # 自定义命名
    lunch:
      # 类型
      # =========================================
      # 定时操作 ——每多久操作一次
      # 定点操作 ——指定时间操作一次
      # =========================================
      type: "定点操作"
      # 时间(时:分:秒)
      time: "12:0:0"
      # 操作
      action:
        - "[broadcast]|&e到点了,该吃饭了~"

# motd
# {online}  ——当前在线
# {max}     ——最大在线
motdSettings:
  # 开关
  enable: true
  # 版本信息覆写
  # 可能导致无法查看服务器延迟
  version:
    # 开关
    enable: true
    # 版本名称(不支持RGB)
    name: "&e自定义版本信息"
  # 玩家数量
  players:
    # 开关
    enable: true
    # 假玩家数量
    fakePlayers:
      # 开关
      enable: true
      # 数量(数学表达式)
      amount: "{online}*2"
    # 假最大数量
    fakeMax:
      # 开关
      enable: true
      # 数量(数学表达式)
      amount: "{online}*2+1"
    # 假玩家列表
    fakeSample:
      # 开关
      enable: true
      # 文本列表(不支持RGB)
      text:
        - "&b我是玩家列表第一行"
        - "&b我是玩家列表第二行"
  # 简介
  description:
    - # 第一行
      line1: "<gradient:#F18989:#EAB5B5>这是MOTD信息的第一行</gradient>"
      # 第二行
      line2: "<gradient:#F1BB89:#EADFB5>这是MOTD信息的第二行www</gradient>"
```

## lang.yml

```yaml
configVersion: "3.2.0"

prefix: "&8[<#CFC2FF>梦之工具&8]"
onlyPlayer: "{prefix} <#FFB8B8>这个命令只能玩家执行!"
noPermission: "{prefix} <#FFB8B8>你没有权限怎么做"
usageError: "{prefix} <#FFB8B8>用法错误,正确用法: &f{usage}"
playerOffline: "{prefix} <#FFB8B8>你指定的玩家并没有在线!"
blackWorld: "{prefix} <#FFB8B8>当前世界无法使用这个功能!"
commandInfoFormat: "  &f{usage}  \n &8 - &7{description}"
enable: <#CAFFB8>开启
disable: <#FFB8B8>关闭

menu:
  fastuse:
    shulkerBox:
      title: "<#EAE4FF>快速使用-潜影盒"
  vanish:
    title: "<#EAE4FF>隐身-容器"

chat:
  delay: "{prefix} <#FFB8B8>冷却中,你还需要等待&f{delay}<#FFB8B8>秒,才可以聊天!"
  spam: "{prefix} <#FFB8B8>消息不能和上一条完全相同!"
  at:
    format: " &a@{name} "
    all: "所有人"
    title: "&e醒醒!|<#EAE4FF>你被 &f{by} <#EAE4FF>AT了!|20|70|10"

gamemode:
  SURVIVAL: "生存模式"
  ADVENTURE: "冒险模式"
  CREATIVE: "创造模式"
  SPECTATOR: "旁观模式"

economy:
  tax: "{prefix} <#EAE4FF>你向服务器上交了 &f{amount} <#EAE4FF>的个人所得税!"

commands:
  mhdftools:
    usage: "/{command} <参数>"
    description: "主命令"
    subCommands:
      feature:
        usage: "/{command} feature"
        description: "功能帮助"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          {helpList}
          &f
          &7⌞     <click:run_command:"/{command} feature {lastPage}"><hover:show_text:"<#EAE4FF>点击返回上一页">&f[上一页]</hover></click>     <{page}/{maxPage}>     <click:run_command:"/{command} feature {nextPage}"><hover:show_text:"<#EAE4FF>点击返回下一页">&f[下一页]</hover></click>&7     ⌟
          &f
      help:
        usage: "/{command} help"
        description: "命令帮助"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          {helpList}
          &f
          &7⌞                                         ⌟
      import:
        usage: "/{command} import <插件名称>"
        description: "导入其他插件的数据"
        pluginNotSupport: "{prefix} <#FFB8B8>目标插件不支持导入!"
        import:
          start: "{prefix} <#EAE4FF>开始导入 &f{plugin} <#EAE4FF>的 &b{name} <#EAE4FF>数据!"
          done: "{prefix} <#EAE4FF>导入 &f{plugin} <#EAE4FF>的 &e{name} <#EAE4FF>数据完成!&7(耗时: {time}ms)"
        message:
          start: "{prefix} <#EAE4FF>开始导入 &f{plugin} <#EAE4FF>的数据!"
          done: "{prefix} <#EAE4FF>导入 &f{plugin} <#EAE4FF>的数据完成!"
      reload:
        usage: "/{command} reload"
        description: "重载插件"
        message: "{prefix} <#EAE4FF>插件重载完成!"
  crash:
    usage: "/{command} <玩家> [崩溃类型]"
    description: "崩溃玩家客户端"
    typeNotExists: "{prefix} <#FFB8B8>目标崩端类型不存在!"
    message: "{prefix} <#EAE4FF>开始尝试崩溃 &f{player} <#EAE4FF>的客户端!&7(类型: {type})<#FFB8B8>"
    types:
      explosion: "爆炸溢出"
      invalidTeleport: "无效传送"
      invalidParticle: "异常粒子"
  knockback:
    usage: "/{command} <玩家> [击退类型]"
    description: "击退玩家"
    message: "{prefix} <#EAE4FF>成功对 &f{player} <#EAE4FF>产生击退!"
    types:
      normal: "正常击退"
      random: "随机方向击退"
  list:
    usage: "/{command}"
    description: "查看在线列表"
    message: |-
      &f
      &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
      &f
      &8▪ &7TPS: &f{tps}
      &8▪ &7内存占用: &f{memory}MB &7/ &b{maxMemory}MB
      &8▪ &7玩家人数: &f{playerCount} &7/ &f{maxPlayerCount}
      &8▪ &7玩家列表:
      &f{playerList}
      &f
      &7⌞                                         ⌟
  fly:
    usage: "/{command} [玩家]"
    description: "飞行"
    message: "{prefix} <#EAE4FF>已设置玩家 &f{player} <#EAE4FF>的飞行模式为 '{change}'"
    fallMessage:
      3: "{prefix} <#EAE4FF>飞行时长还有&b3秒|&f即将关闭飞行!|10|70|20"
      2: "{prefix} <#EAE4FF>飞行时长还有&b2秒|&f即将关闭飞行!|10|70|20"
      1: "{prefix} <#EAE4FF>飞行时长还有&b1秒|&f即将关闭飞行!|10|70|20"
      0: "{prefix} <#EAE4FF>飞行已关闭|&f迫降中!|10|70|20"
  vanish:
    usage: "/{command} [玩家]"
    description: "隐身"
    message: "{prefix} <#EAE4FF>已设置玩家 &f{player} <#EAE4FF>的隐身模式为 '{change}'"
  flytime:
    usage: "/{command} <参数>"
    description: "限时飞行"
    timeFormatError: "{prefix} <#FFB8B8>时间不能是非数字的内容!"
    subCommands:
      help:
        usage: "/{command} help"
        description: "命令帮助"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          {helpList}
          &f
          &7⌞                                         ⌟
      set:
        usage: "/{command} set <玩家> <时间>"
        description: "设置玩家的飞行时间"
        message: "{prefix} &f{player} <#EAE4FF>的飞行时间已修改为 &b{change}秒<#EAE4FF>!"
      add:
        usage: "/{command} add <玩家> <时间>"
        description: "增加玩家的飞行时间"
        message: "{prefix} &f{player} <#EAE4FF>的飞行时间已增加为 &e{change}秒<#EAE4FF>,现在他可以飞行 &b{amount}秒<#EAE4FF>!"
      take:
        usage: "/{command} take <玩家> <时间>"
        description: "减少玩家的飞行时间"
        message: "{prefix} &f{player} <#EAE4FF>的飞行时间已减少为 &e{change}秒<#EAE4FF>,现在他可以飞行 &b{amount}秒<#EAE4FF>!"
  stop:
    usage: "/{command} <参数>"
    description: "更好的关服"
    defaultMessage: "<#FFB8B8>服务器已关闭!"
    timeFormatError: "{prefix} <#FFB8B8>时间不能是非数字的内容!"
    countdownMessage: "{prefix} <#EAE4FF>服务器还有 &f{countdown}秒 <#EAE4FF>关闭,请做好准备!"
    kickMessage: |-
      &f
      &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
      &f
      {message}
      &f
      &7⌞                                         ⌟
    subCommands:
      help:
        usage: "/{command} help"
        description: "命令帮助"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          {helpList}
          &f
          &7⌞                                         ⌟
      cancel:
        usage: "/{command} cancel"
        description: "取消关服"
        noStop: "{prefix} <#FFB8B8>没有可以取消的关服操作!"
        message: "{prefix} <#EAE4FF>已取消关服操作!"
      confirm:
        usage: "/{command} confirm"
        description: "确认关服"
        noStop: "{prefix} <#FFB8B8>没有可以确认的关服操作!"
      default:
        usage: "/{command} [倒计时] [消息]"
        description: "关服"
        inStop: "{prefix} <#FFB8B8>服务器已经在倒计时关闭了! <click:run_command:\"/stop cancel\"><hover:show_text:\"<#EAE4FF>点击确认取消\"><#CAFFB8>/stop cancel - [确认取消]</hover></click>"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          <#EAE4FF>你确认要在 &f{time}秒 <#EAE4FF>后关闭服务器吗?
          <#EAE4FF>关服原因: &f{message} 
          &f
          <click:run_command:"/stop confirm"><hover:show_text:"<#EAE4FF>点击确认关闭"><#CAFFB8>/stop confirm - [确认关闭]</hover></click>
          &f
          &7⌞                                         ⌟
  tpa:
    usage: "/{command} <目标玩家>"
    description: "请求传送至指定玩家"
    message: "{prefix} <#EAE4FF>你向 &f{player} <#EAE4FF>发送了传送请求!"
    accept:
      message: "{prefix} <#EAE4FF>你接受了 &f{player} <#EAE4FF>的传送请求!"
      accepted: "{prefix} &f{player} <#EAE4FF>接受了你的传送请求!"
    reject:
      message: "{prefix} <#EAE4FF>你拒绝了 &f{player} <#EAE4FF>的传送请求!"
      rejected: "{prefix} &f{player} <#EAE4FF>拒绝了你的传送请求!"
    delay:
      message: "{prefix} <#EAE4FF>你向 &f{player} <#EAE4FF>发送的传送请求超时了!"
      timeOut: "{prefix} &f{player} <#EAE4FF>向你发送的传送请求超时了!"
    inDelay: "{prefix} <#EAE4FF>传送冷却中,你还要 &f{delay}秒 <#EAE4FF>后才能发送传送请求!"
    noRequest: "{prefix} &f{player} <#FFB8B8>没有向你发送传送请求!"
    sendSelf: "{prefix} <#FFB8B8>你不可以给自己发送传送请求!"
    requestMessage: |-
      &f
      &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
      &f
      &f{player} <#EAE4FF>想来你这里看看!
      &f
      <click:run_command:"/tpa accept {player}"><hover:show_text:"<#EAE4FF>点击接受{player}的传送请求"><#CAFFB8>[接受]</hover></click>   <click:run_command:"/tpa reject {player}"><hover:show_text:"<#EAE4FF>点击拒绝{player}的传送请求"><#FFB8B8>[拒绝]</hover></click>
      &f
      &7⌞                                         ⌟
  tpahere:
    message: "{prefix} <#EAE4FF>你向 &f{player} <#EAE4FF>发送了传送请求!"
    accept:
      message: "{prefix} <#EAE4FF>你接受了 &f{player} <#EAE4FF>的传送请求!"
      accepted: "{prefix} &f{player} <#EAE4FF>接受了你的传送请求!"
    reject:
      message: "{prefix} <#EAE4FF>你拒绝了 &f{player} <#EAE4FF>的传送请求!"
      rejected: "{prefix} &f{player} <#EAE4FF>拒绝了你的传送请求!"
    delay:
      message: "{prefix} <#EAE4FF>你向 &f{player} <#EAE4FF>发送的传送请求超时了!"
      timeOut: "{prefix} &f{player} <#EAE4FF>向你发送的传送请求超时了!"
    inDelay: "{prefix} <#EAE4FF>传送冷却中,你还要 &f{delay}秒 <#EAE4FF>后才能发送传送请求!"
    noRequest: "{prefix} &f{player} <#FFB8B8>没有向你发送传送请求!"
    sendSelf: "{prefix} <#FFB8B8>你不可以给自己发送传送请求!"
    requestMessage: |-
      &f
      &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
      &f
      &f{player} <#EAE4FF>想让你去他那看看!
      &f
      <click:run_command:"/tpahere accept {player}"><hover:show_text:"<#EAE4FF>点击接受{player}的传送请求"><#CAFFB8>[接受]</hover></click>   <click:run_command:"/tpahere reject {player}"><hover:show_text:"<#EAE4FF>点击拒绝{player}的传送请求"><#FFB8B8>[拒绝]</hover></click>
      &f
      &7⌞                                         ⌟
  custommenu:
    usage: "/{command} <菜单>"
    description: "打开指定菜单"
    noMenu: "{prefix} <#FFB8B8>找不到名为 &f{menu} 的菜单!"
    message: "{prefix} <#EAE4FF>你打开了 &f{menu}<#FFB8B8>!"
  home:
    usage: "/{command} [家名称]"
    description: "返回到指定家"
    noHome: "{prefix} <#FFB8B8>找不到名为 &f{home} <#FFB8B8>的家!"
    openMenuMessage: "{prefix} <#EAE4FF>你打开了家列表!"
    message: "{prefix} <#EAE4FF>你传送到了 &f{home}<#FFB8B8>!"
  sethome:
    usage: "/{command} <家名称>"
    description: "设置家"
    haveHome: "{prefix} <#FFB8B8>你已经有一个名为 &f{home} <#FFB8B8>的家了,请不要重复设置!"
    isMax: "{prefix} <#FFB8B8>你已经设置了 &f{amount}个 <#FFB8B8>家了,没有办法设置更多家了!"
    message: "{prefix} <#EAE4FF>你设置了一个名为 &f{home} <#EAE4FF>的家!"
  delhome:
    usage: "/{command} <家名称>"
    description: "删除家"
    noHome: "{prefix} <#FFB8B8>找不到名为 &f{home} <#FFB8B8>的家!"
    message: "{prefix} <#EAE4FF>你删除了一个名为 &f{home} <#EAE4FF>的家!"
  back:
    usage: "/{command}"
    description: "返回死亡点"
    noLocation: "{prefix} <#EAE4FF>找不到你上次死亡点的位置!"
    respawnMessage: "{prefix} <#EAE4FF>输入 &f/back <#EAE4FF>返回死亡点!"
    message: "{prefix} <#EAE4FF>你来到了死亡点,输入 &f/tpback <#EAE4FF>返回传送前的位置!"
  tpback:
    usage: "/{command}"
    description: "返回传送前的位置"
    noLocation: "{prefix} <#EAE4FF>找不到你上次传送前的位置!"
    message: "{prefix} <#EAE4FF>你来到了传送前的位置,输入 &f/tpback <#EAE4FF>返回传送前的位置!"
  spawn:
    usage: "/{command}"
    description: "返回出生点"
    message: "{prefix} <#EAE4FF>你回到了出生点!"
  setspawn:
    usage: "/{command}"
    description: "设置出生点"
    message: "{prefix} <#EAE4FF>你成功将此处设置为出生点!"
  nick:
    usage: "/{command} <名称> [玩家]"
    description: "修改玩家匿名名称"
    message: "{prefix} &f{player} <#EAE4FF>的名称已修改为 &b{name}<#EAE4FF>!"
  ip:
    usage: "/{command} <玩家>"
    description: "查询一个玩家的IP信息"
    message: |-
      &f
      &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
      &f
      &8▪ &f玩家: <#CFC2FF>{player}
      &8▪ &7IP: &f{ip}
      &8▪ &7归属地: &f{location}
      &f
      &7⌞                                         ⌟
  gamemode:
    usage: "/{command} <游戏模式> [玩家]"
    description: "修改玩家游戏模式"
    noGameMode: "{prefix} <#FFB8B8>找不到名为 &f{gamemode} #FFB8B8>的游戏模式!"
    message: "{prefix} &f{player} <#EAE4FF>的游戏模式已被更新为 &b{gamemode}<#EAE4FF>!"
  bed:
    usage: "/{command}"
    description: "回到床的位置"
    noSleep: "{prefix} <#FFB8B8>找不到你床的位置!"
    message: "{prefix} <#EAE4FF>你回到了床的旁边!"
  hat:
    usage: "/{command}"
    description: "帽子"
    noItem: "{prefix} <#FFB8B8>手上必须要有物品!"
    message: "{prefix} <#EAE4FF>快看看你的新帽子!"
  suicide:
    usage: "/{command}"
    description: "自杀"
    confirm: |-
      &f
      &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
      &f
      <#EAE4FF>你确定要自杀吗?
      &f
      <click:run_command:"/suicide confirm"><hover:show_text:"<#EAE4FF>点击确认自杀"><#CAFFB8>/suicide confirm - [确认自杀]</hover></click>
      &f
      &7⌞                                         ⌟
    message: "{prefix} <#EAE4FF>你自杀了!"
  warp:
    usage: "/{command} <传送点> [玩家]"
    description: "传送到指定传送点"
    noHome: "{prefix} <#FFB8B8>找不到名为 &f{warp} <#FFB8B8>的传送点!"
    message: "{prefix} <#EAE4FF>你传送到了 &f{warp}<#FFB8B8>!"
  setwarp:
    usage: "/{command} <传送点>"
    description: "设置传送点"
    message: "{prefix} <#EAE4FF>你设置了一个名为 &f{warp} <#EAE4FF>的传送点!"
  delwarp:
    usage: "/{command} <传送点>"
    description: "删除传送点"
    noHome: "{prefix} <#FFB8B8>找不到名为 &f{warp} <#FFB8B8>的传送点!"
    message: "{prefix} <#EAE4FF>你删除了一个名为 &f{warp} <#EAE4FF>的传送点!"
  money:
    usage: "/{command} [玩家]"
    description: "查询余额"
    message: "{prefix} &f{player} <#EAE4FF>的余额为 &b{amount}<#FFB8B8>!"
  pay:
    usage: "/{command} <玩家> <金额>"
    description: "转账"
    paySelf: "{prefix} <#FFB8B8>你不可以给自己转账!"
    moneyFormatError: "{prefix} <#FFB8B8>金额不能是非数字的内容!"
    noMoney: "{prefix} <#FFB8B8>你没有那么多的钱!"
    message: "{prefix} <#EAE4FF>你向 &f{player} <#EAE4FF>转了 &b{amount}<#EAE4FF>!"
    receivedMessage: "{prefix} &f{player} <#EAE4FF>向你转了 &b{amount}<#EAE4FF>!"
  moneyadmin:
    usage: "/{command} <参数>"
    description: "经济管理"
    moneyFormatError: "{prefix} <#FFB8B8>金额不能是非数字的内容!"
    subCommands:
      help:
        usage: "/{command} help"
        description: "命令帮助"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          {helpList}
          &f
          &7⌞                                         ⌟
      set:
        usage: "/{command} set <玩家> <金额>"
        description: "设置经济"
        message: "{prefix} &f{player} <#EAE4FF>的余额被设置为 &b{amount}<#EAE4FF>!"
      add:
        usage: "/{command} add <玩家> <金额>"
        description: "增加经济"
        message: "{prefix} &f{player} <#EAE4FF>的余额被增加 &e{change}<#EAE4FF>,他现在有 &b{amount}<#EAE4FF>!"
      take:
        usage: "/{command} take <玩家> <金额>"
        description: "扣除经济"
        message: "{prefix} &f{player} <#EAE4FF>的余额被扣除 &e{change}<#EAE4FF>,他现在有 &b{amount}<#EAE4FF>!"
  randomteleport:
    usage: "/{command} [参数]"
    description: "随机传送"
    delay: "{prefix} <#FFB8B8>冷却中,你还需要等待 &f{delay}秒<#FFB8B8>,才可以传送!"
    blackWorld: "{prefix} <#FFB8B8>世界 &f{world} 不允许随机传送!"
    noWorld: "{prefix} <#FFB8B8>找不到名为 &f{world} <#FFB8B8>的世界!"
    noBiome: "{prefix} <#FFB8B8>找不到名为 &f{biome} <#FFB8B8>的群系!"
    outTryTime: "{prefix} <#FFB8B8>重试次数超过 &f{amount}<#FFB8B8>,终止传送!"
    message: "{prefix} <#EAE4FF>传送成功!&7(耗时: {duration}ms)"
    sucCommands:
      help:
        usage: "/{command} help"
        description: "命令帮助"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          {helpList}
          &f
          &7⌞                                         ⌟
      world:
        usage: "/{command} world <世界> [玩家] [服务器]"
        description: "在指定世界内随机传送"
      biome:
        usage: "/{command} biome <世界> <群系> [玩家] [服务器]"
        description: "在指定世界内随机传送至指定群系"
  ignore:
    usage: "/{command} <参数>"
    description: "屏蔽管理"
    subCommands:
      help:
        usage: "/{command} help"
        description: "命令帮助"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          {helpList}
          &f
          &7⌞                                         ⌟
      list:
        usage: "/{command} list"
        description: "屏蔽玩家列表"
        message: |-
          &f
          &7⌜       <#FF359F>MHDF-Tools &f{version} - <#CFC2FF>梦之工具 &7      ⌝
          &f
          &8▪ &7屏蔽列表:
          &f{list}
          &f
          &7⌞                                         ⌟
      add:
        usage: "/{command} add <玩家>"
        description: "增加屏蔽玩家"
        haveIgnore: "{prefix} <#FFB8B8>你已经屏蔽了 &f{player}<#FFB8B8>,无法重复忽略!"
        blacklist: "{prefix} <#FFB8B8>你不能屏蔽 &f{player}!"
        ignoreSelf: "{prefix} <#FFB8B8>您不能屏蔽自己的消息!"
        message: "{prefix} <#EAE4FF>你屏蔽了 &f{player}!"
      remove:
        usage: "/{command} remove <玩家>"
        description: "移除屏蔽玩家"
        noIgnore: "{prefix} &f{player} <#FFB8B8>没有被你屏蔽!"
        message: "{prefix} <#EAE4FF>你取消屏蔽了 &f{player}!"
  msg:
    usage: "/{command} <玩家> <消息>"
    description: "发送私聊消息"
    receive: "{prefix} &7{player}悄悄向你说: {message}"
    send: "{prefix} &7你向{target}悄悄说: {message}"
  reply:
    usage: "/{command} <消息>"
    description: "回复私聊消息"
    noTarget: "{prefix} <#FFB8B8>找不到回复目标!"
  invsee:
    usage: "/{command} <玩家> <背包类型>"
    description: "查看背包"
    types:
      armor: "装备栏"
      inventory: "背包"
      enderchest: "末影箱"
    noType: "{prefix} <#FFB8B8>找不到名为 &f{type} <#FFB8B8>的背包类型!"
    message: "{prefix} <#EAE4FF>你打开了 &f{player} 的 &b{type}!"
  fastchangetime:
    usage: "/{command}"
    description: "快速调节时间"
    message: "{prefix} <#EAE4FF>时间已调节为 &f{time}<#EAE4FF>!"
  fastchangeweather:
    usage: "/{command}"
    description: "快速调节天气"
    message: "{prefix} <#EAE4FF>雨天已设置为 &f{storm}<#EAE4FF>,打雷已设置为 &f{thunder}<#EAE4FF>!"
  fakechangetime:
    usage: "/{command} <时间> [玩家]"
    description: "虚假调节时间"
    timeFormatError: "{prefix} <#FFB8B8>时间不能是非数字的内容!"
    reset: "{prefix} &f{player} <#EAE4FF>的虚假时间调节已关闭!"
    message: "{prefix} &f{player} <#EAE4FF>的虚假时间调节已设置为 &b{time}!"
  lookitem:
    usage: "/{command} <物品ID>"
    description: "查看物品"
    noData: "{prefix} <#FFB8B8>找不到物品数据,可能数据已过期!"
    message: "{prefix} <#EAE4FF>你打开了一个展示物品!"
  lookinventory:
    usage: "/{command} <背包ID>"
    description: "查看背包"
    noData: "{prefix} <#FFB8B8>找不到背包数据,可能数据已过期!"
    message: "{prefix} <#EAE4FF>你打开了一个展示背包!"
  lookenderchest:
    usage: "/{command} <末影箱ID>"
    description: "查看末影箱"
    noData: "{prefix} <#FFB8B8>找不到末影箱数据,可能数据已过期!"
    message: "{prefix} <#EAE4FF>你打开了一个展示末影箱!"
```

## proxy.yml

```yaml
# 配置文件版本号(请勿修改)
configVersion: "3.2.0"

# 代理
proxySettings:
  # 开关
  enable: false
  # 类型
  # HTTP SOCKS
  type: "HTTP"
  # 地址
  host: "127.0.0.1"
  # 端口
  port: 7890
```

## sound.yml

```yaml
configVersion: "3.2.0"

flyFall:
  3: "minecraft:entity.experience_orb.pickup|0.25|0.7"
  2: "minecraft:entity.experience_orb.pickup|0.25|0.8"
  1: "minecraft:entity.experience_orb.pickup|0.25|0.9"
  0: "minecraft:entity.generic.explode|0.25|2.0"

chat:
  at: "minecraft:block.note_block.bell|0.5|1.2"
```