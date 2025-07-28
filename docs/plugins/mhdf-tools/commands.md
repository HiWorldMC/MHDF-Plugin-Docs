---
sidebar_position: 4
---

# 命令和权限

:::tip

标记了 ☑️ 的命令代表控制台也可以执行，反之标记了 ❇️ 的只有玩家可以执行。  
`()` 代表指令别名，`<>` 代表必选参数，`[]` 代表可选参数。
根命令为 `/mhdftools`，简写为 `/mt`

:::

|     | 命令 | 描述 | 权限 |
|-----|------|-----|-----|
| ❇️  | `/back` | 返回死亡点 | `mhdftools.commands.back` |
| ❇️  | `/bed` | 回到床的位置 | `mhdftools.commands.bed` |
| ☑️  | `/crash <玩家> [崩溃类型]` | 使指定玩家客户端崩溃 | `mhdftools.commands.crash` |
| ❇️  | `/custommenu <菜单>` | 打开指定菜单 | `mhdftools.commands.custommenu` |
| ❇️  | `/day` | 将时间设置为白天 | `mhdftools.commands.fastchangetime` |
| ❇️  | `/delhome <家名称>` | 删除指定的家 | `mhdftools.commands.delhome` |
| ❇️  | `/delwarp <传送点>` | 删除指定的传送点 | `mhdftools.commands.delwarp` |
| ☑️  | `/eco <参数>` | 经济系统管理 | `mhdftools.commands.moneyadmin` |
| ☑️  | `/fakechangetime <时间> [玩家]` | 仅对指定玩家虚假修改时间 | `mhdftools.commands.fakechangetime` |
| ❇️  | `/fly [玩家]` | 切换飞行模式(对自己或指定玩家) | `mhdftools.commands.fly`, `mhdftools.commands.fly.give` |
| ❇️  | `/flytime <时间>` | 设置限时飞行时间 | `mhdftools.commands.flytime` |
| ☑️  | `/gamemode <模式> [玩家]` | 更改游戏模式(别名/gm) | `mhdftools.commands.gamemode`, `mhdftools.commands.gamemode.give` |
| ❇️  | `/hat` | 将手中的物品戴在头上作为帽子 | `mhdftools.commands.hat` |
| ❇️  | `/home [家名称]` | 传送到指定的家 | `mhdftools.commands.home` |
| ❇️  | `/inv` | 打开个人背包 | `mhdftools.commands.lookinventory` |
| ❇️  | `/invsee <玩家> <背包类型>` | 查看其他玩家的背包 | `mhdftools.commands.invsee` |
| ☑️  | `/ip <玩家>` | 查询玩家IP地址 | `mhdftools.commands.ip` |
| ☑️  | `/ipinfo <IP>` | 查询IP地址详细信息 | `mhdftools.commands.ip` |
| ❇️  | `/kb <玩家> [力度]` | 击退指定玩家(别名/knockback) | `mhdftools.commands.knockback` |
| ❇️  | `/lookenderchest <玩家>` | 查看玩家的末影箱 | `mhdftools.commands.lookenderchest` |
| ❇️  | `/lookinventory <玩家>` | 查看玩家的背包 | `mhdftools.commands.lookinventory` |
| ❇️  | `/lookitem` | 查看手中物品的详细信息 | `mhdftools.commands.lookitem` |
| ☑️  | `/list` | 查看在线玩家列表 | `mhdftools.commands.list` |
| ❇️  | `/menu` | 打开插件菜单(别名/mt) | `mhdftools.commands.mhdftools` |
| ❇️  | `/money [玩家]` | 查看自己或他人的余额 | `mhdftools.commands.money`, `mhdftools.commands.money.other` |
| ☑️  | `/moneyadmin <参数>` | 经济系统高级管理 | `mhdftools.commands.moneyadmin` |
| ☑️  | `/mhdftools` | 插件主命令(别名/mt) | `mhdftools.commands.mhdftools` |
| ❇️  | `/msg <玩家> <消息>` | 发送私聊消息(别名/tell,/w) | `mhdftools.commands.msg` |
| ☑️  | `/nick <昵称> [玩家]` | 设置玩家昵称 | `mhdftools.commands.nick`, `mhdftools.commands.nick.give` |
| ❇️  | `/night` | 将时间设置为夜晚 | `mhdftools.commands.fastchangetime` |
| ❇️  | `/pay <玩家> <金额>` | 向其他玩家转账 | `mhdftools.commands.pay` |
| ❇️  | `/randomteleport [参数]` | 随机传送(别名/rtp) | `mhdftools.commands.randomteleport`, `mhdftools.group.randomteleport` |
| ❇️  | `/reply <消息>` | 回复最后私聊的玩家 | `mhdftools.commands.reply` |
| ❇️  | `/sethome <家名称>` | 设置家的位置 | `mhdftools.commands.sethome` |
| ❇️  | `/setspawn` | 设置服务器出生点 | `mhdftools.commands.setspawn` |
| ❇️  | `/setwarp <传送点>` | 设置公共传送点 | `mhdftools.commands.setwarp` |
| ❇️  | `/spawn` | 传送至服务器出生点 | `mhdftools.commands.spawn` |
| ☑️  | `/stop <参数>` | 安全关闭服务器 | `mhdftools.commands.stop` |
| ❇️  | `/suicide` | 自杀 | `mhdftools.commands.suicide` |
| ❇️  | `/sun` | 设置晴天 | `mhdftools.commands.fastchangeweather` |
| ❇️  | `/tell <玩家> <消息>` | 发送私聊消息(别名/msg,/w) | `mhdftools.commands.msg` |
| ❇️  | `/tpa <玩家>` | 请求传送到指定玩家 | `mhdftools.commands.tpa` |
| ❇️  | `/tpahere <玩家>` | 请求将玩家传送到自己 | `mhdftools.commands.tpahere` |
| ❇️  | `/tpback` | 返回上一次传送前的位置 | `mhdftools.commands.tpback` |
| ❇️  | `/vanish [玩家]` | 切换隐身状态(对自己或指定玩家) | `mhdftools.commands.vanish` |
| ❇️  | `/warp <传送点> [玩家]` | 传送到指定公共传送点 | `mhdftools.commands.warp`, `mhdftools.commands.warp.other` |
| ❇️  | `/w <玩家> <消息>` | 发送私聊消息(别名/msg,/tell) | `mhdftools.commands.msg` |

## 分组权限

- `mhdftools.group.chatformat` - 聊天分组权限
- `mhdftools.group.randomteleport` - 随机传送分组权限
- `mhdftools.group.joinmessage` - 进服消息分组权限
- `mhdftools.group.quitmessage` - 退服消息分组权限
- `mhdftools.group.eventaction` - 事件操作分组权限

## 绕过权限

- `mhdftools.bypass.chat.delay` - 聊天延迟绕过
- `mhdftools.bypass.chat.spam` - 聊天禁止刷屏绕过
- `mhdftools.bypass.chat.replaceWord` - 聊天替换词绕过
- `mhdftools.bypass.ignore.blacklist` - 屏蔽禁止屏蔽列表绕过
- `mhdftools.bypass.randomteleport.delay` - 随机传送延迟绕过

## 聊天权限

- `mhdftools.chat.at.all` - AT所有人
- `mhdftools.chat.color` - 聊天颜色
- `mhdftools.chat.minimessage` - 聊天MiniMessage格式

