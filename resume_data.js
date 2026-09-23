// resume‑data.js 简历数据源
const resumeData = {
  name: "洪妍灵",
  title: "AI应用全栈 / 大模型智能体开发工程师",
  // subTitle: "WebGIS · 前后端全栈",
  subTitle: "期望岗位：AI全栈开发工程师",
  phone: "131‑9980‑6872",
  email: "1013259440@qq.com",
  gitee: "gitee.com/hongruichen",
  location: "深圳 · 可接受广州",

  summary: `<strong>4 年 WebGIS 全栈开发经验，2022–2025 年全职攻读硕士研究生，研究方向为机器人深度强化学习路径规划</strong>；独立完成芯禾巡检机器人多智能体平台项目，基于 LangGraph 实现多 Agent 编排，结合 RAG 知识库、Cesium 三维数字孪生与巡检任务规划，形成可演示的智能巡检系统、同步完成 2 套AI Agent演示项目；具备二三维GIS商业项目完整交付经验，2个项目实现前后端独立全栈开发；掌握LangGraph多智能体编排、混合RAG检索、多模态语音交互、RBAC行级权限、Docker容器化与双CI/CD工程体系；具备从需求、架构设计、核心逻辑开发、测试治理到上线部署全链路能力。企业项目量化成果：问答准确率提升50%，任务下发效率提升20%，接口响应延迟缩短35%，线上排障效率提升60%+，个人作品集：<a href="https://gitee.com/hongruichen" target="_blank">https://gitee.com/hongruichen</a>`,

  expSummary:
    "拥有GIS与AI两大领域沉淀，<b>2个商业项目完成前后端独立全栈开发</b>，可独立承担需求梳理、数据库设计、接口开发、前端实现、部署验收完整流程；早期积累大量Cesium/OpenLayers二三维GIS商业项目，熟悉遥感、无人机、机器人巡检、数字孪生大屏业务；研究生阶段深耕机器人深度强化学习与多智能体算法；研究生毕业后期主攻大模型应用开发，落地多套Agent系统，<b>擅长GIS空间业务、机器人/无人机调度与大模型智能体融合开发</b>。",

  skillGroups: [
    {
      label: "AI Agent & 大模型应用",
      tags: [
        "Python",
        "LangGraph",
        "LangChain",
        "A2A协议",
        "MCP协议",
        "HITL人机协同",
        "Function‑Calling",
        "Qwen系列",
      ],
    },
    {
      label: "RAG & 知识库评测",
      tags: [
        "BM25",
        "BGE重排",
        "RRF融合",
        "ChromaDB",
        "MinerU文档解析",
        "Ragas评测",
        "Query重写",
      ],
    },
    {
      label: "后端工程 & 多模态",
      tags: [
        "FastAPI/Django",
        "SSE流式",
        "WebSocket",
        "MQTT",
        "STT/TTS语音",
        "APScheduler",
        "Pydantic v2",
      ],
    },
    {
      label: "数据库、缓存与权限",
      tags: [
        "PostgreSQL",
        "Redis",
        "PostGIS",
        "RBAC行级权限",
        "JWT/apiKey双鉴权",
      ],
    },
    {
      label: "GIS & 前端 & 算法",
      tags: [
        "Vue3",
        "Cesium",
        "OpenLayers",
        "3D‑Tiles",
        "ECharts",
        "Electron",
        "强化学习(PPO/SAC/DQN)",
      ],
    },
    {
      label: "工程运维 & 可观测",
      tags: [
        "Docker / Compose",
        "pytest单元测试",
        "Gitee‑Go/GitHub Actions",
        "LangSmith",
        "tenacity降级重试",
        "Git",
      ],
    },
  ],

  projects: [
    {
      name: "A2A多智能体代码生成审查协作平台",
      role: "独立全栈开发",
      date: "2026.09‑2026.09",
      projectIntro:
        "基于Google开源A2A（Agent‑to‑Agent）通信协议打造多智能体协作工程化Demo平台，解决异构框架、不同厂商智能体之间无法互通协同的行业痛点，从0完成四大编排模式核心逻辑开发，本地化适配封装A2A协议，打通Agent注册‑发现‑消息通信‑任务调度完整链路。实现路由、流水线、Map‑Reduce并行聚合、多轮协商四类主流多智能体协作范式；同时构建单元测试体系、CI/CD自动化流水线、Docker容器一键部署、LangSmith全链路可观测整套工程能力；沉淀异构智能体互联互通的工程实践经验。（演示视频与源码见 Gitee：https://gitee.com/hongruichen/multi_agent_a2a_protocol）",
      tech: ["FastAPI", "A2A协议", "通义千问", "pytest", "Docker", "CI/CD"],
      aiPoints: [
        "实现<strong>路由、Pipeline流水线、Map‑Reduce并行、Negotiation协商</strong>四大编排模式，完成代码生成、多维代码审查、搜索天气工具集成。",
        "基于Google A2A Agent‑to‑Agent协议，实现AgentCard智能体自动发现、JSON‑RPC标准化消息交互、SSE流式响应，实现跨服务Agent互通协作。",
        "接入LangSmith全链路观测，追踪意图识别、工具调用、LLM推理、结果聚合流程，集成天气、搜索、五维代码审查工具。",
      ],
      backendPoints: [
        "设计apiKey+JWT双轨鉴权体系，中间件统一拦截校验，兼顾开发调试与生产环境安全。",
        "编写91个Mock测试用例，自研FakeLLMClient实现离线单元测试，分支覆盖率76.4%，设置70%门禁。",
        "Gitee‑Go + GitHub Actions双CI/CD流水线，自动执行单测、覆盖率统计、镜像构建、容器健康冒烟。",
        "Docker双容器一键部署，.env统一管理密钥配置，实现敏感信息脱敏隔离。",
      ],
      frontendPoints: [
        "开发多智能体协作管理界面，可视化Agent注册、发现、通信链路，支持提交任务、实时观察Agent协作过程与工具调用面板。",
      ],
    },
    {
      name: "HealthAgent多模态健康管理中台",
      role: "AI‑Agent全栈开发",
      date: "2026.08‑2026.08",
      projectIntro:
        "基于LangChain+LangGraph搭建多智能体健康管理平台，覆盖饮食分析、心理健康、运动指导三大业务场景，支持文本、图片、语音多模态交互。依托MCP协议对接PostgreSQL完成结构化数据工具调用，采用混合RAG检索增强技术，有效降低大模型幻觉问题。平台内置两级RBAC行级数据权限体系，保障用户健康数据隔离安全；深度集成飞书OAuth扫码登录，实现三餐、运动提醒等定时消息推送，接入LangSmith完成全链路请求追踪与问题排查。完整落地多模态交互、多智能体协同、长期记忆、混合RAG整套能力，可实现餐食图片热量识别、健康智能问答、个性化方案生成、定时消息推送、数据权限管控、全链路观测。解决传统AI对话存在的会话记忆缺失、缺少领域知识库、交互形式单一、调试排障困难、数据访问安全管控薄弱四大痛点。（演示视频与源码见 Gitee：https://gitee.com/hongruichen/heathAgentControlPlan）",
      tech: [
        "LangGraph",
        "FastAPI",
        "Qwen‑Omni‑Turbo",
        "Redis",
        "ChromaDB",
        "飞书开放平台",
      ],
      aiPoints: [
        "基于LangGraph搭建路由调度Agent + 饮食/心理/运动多专业Agent协同架构，管理对话状态流转，自动识别用户意图分流业务场景。",
        "集成Qwen‑Omni‑Turbo视觉模型识别餐食图片，实现食材、热量、营养素结构化解析入库；搭建<strong>STT‑Agent‑TTS语音三明治架构</strong>，交互场景覆盖率提升45%。",
        "搭建饮食、运动、心理、通用四大独立知识库，实现BM25+稠密向量+RRF融合+BGE重排四级混合RAG，增加置信度拦截与知识溯源，问答准确率提升50%，抑制模型幻觉。",
        "实现L1/L2/L3冷热分层记忆：Redis短期会话、滚动摘要+用户事实、ChromaDB长期向量记忆，解决长对话Token膨胀、上下文丢失问题。",
        "LangSmith埋入user_id、role、session_id多维标签，可视化模型调用与Token消耗，线上问题排查效率提升60%+。",
      ],
      backendPoints: [
        "自研两级RBAC行级鉴权中间层，覆盖HTTP/WebSocket全部链路，服务端Session鉴权，杜绝前端篡改参数越权访问。",
        "对接飞书企业自建应用，实现OAuth扫码登录、state防CSRF、账号换绑；APScheduler实现三餐、运动提醒定时私聊推送。",
        "实现Redis会话续期、接口幂等、多级降级策略、WebSocket断连容错，系统稳定性99.9%。",
      ],
      frontendPoints: [
        "搭建健康数据可视化管理后台，展示用户画像、饮食/运动/心理多维度统计看板，依托行级权限做数据隔离访问。",
      ],
    },
    {
      name: "芯禾智能问答机器人 XinheBot",
      role: "独立架构&后端全栈开发（配合产品、测试共3人）",
      date: "2026.03‑2026.07",
      projectIntro:
        "面向智能巡检机器人、无人机业务的企业级 RAG‑Agent 多智能体平台。基于 LangGraph 实现多智能体子图编排，采用 Supervisor 主管 Agent 做全局任务路由，包含售前咨询、售后运维、设备任务调度 3 个专项 Worker 子 Agent，以 AI 对话驱动售前咨询、售后工单、机器人 / 无人机巡检调度、报告审批全流程。自研轻量化客户资产 CRM 子模块作为多租户后台核心，支持 PC + 移动端 H5 双端访问，实现设备状态查询、巡检任务下发、客户档案维护、资产绑定与工单全生命周期流转；RBAC 三级权限 + tenant_id 行级隔离，保障租户数据隔离。内置 RAG 知识库，接入售前与运维专业文档；搭建 RAG 评测体系 和多类场景领域测试集，使用 RAGAS+qwen-plus 完成量化指标评估并生成可追溯 HTML 报告。依托 MCP 网关对接机器人云平台、大疆司空 2；前端 Vue3 开发智能客服后台，结合 Cesium 实现三维数字孪生，可视化设备点位、巡检轨迹与实时态势。底层 MySQL+Redis + 向量库，LangSmith 全链路追踪，高危操作人工审批；容器化部署投入业务试用，支撑 1000 家客户、日活 200。（演示视频与源码见 Gitee：https://gitee.com/hongruichen/xinhe‑project‑made‑open‑source）。",
        tech: [
        "Python",
        "LangGraph",
        "FastAPI",
        "PostgreSQL",
        "ChromaDB",
        "Cesium",
        "LangSmith",
        "Docker",
        "MQTT",
        "WebSocket",
      ],
      aiPoints: [
        "基于LangGraph设计<strong>总图+3个子图（售前咨询/售后运维/设备任务调度）</strong>，实现意图分诊、互斥单选Agent路由，一轮对话仅调度单一业务Agent，避免业务数据互相干扰。",
        "使用LangGraph interrupt/resume实现HITL人机交互5节点巡检工作流；PostgreSQL Checkpointer持久化会话快照，支持中断恢复、回退、任务取消，任务下发效率提升20%。",
        "设计L1滑动窗口+L2摘要事实+L3冷归档三层记忆，异步压缩不阻塞SSE流式输出，解决长对话Token膨胀。",
        "封装MCP统一资源层与配置化工具工厂，30+业务工具，tenant_id+device_id双重行级过滤，超时熔断，防止LLM编造业务数据；SKILL.md中间件约束模型调用规则，第三方接口接入由1‑2天缩短到半小时。",
        "搭建bge‑m3向量+BM25+关键词三路混合检索，四分知识库按标签路由，Ragas三维评测；低相关自动最多3次Query重写，无效检索率下降40%以上。",
        "LangSmith全链路Trace，会话、工单、Agent推理全部可追踪；手机号/身份证等敏感信息自动脱敏；分级采样策略，异常链路强制全量采集。",
      ],
      backendPoints: [
        "自研轻量化客户资产 CRM 多租户后台核心模块，实现客户档案管理、机器人资产归属绑定、设备台账维护、售后工单全生命周期流转",
        "APScheduler+PG咨询锁+task_id幂等实现自然语言解析巡检/飞行任务，保证任务不重不漏。",
        "FastAPI全站异步改造，PostgreSQL异步连接池，自定义ParallelToolNode并行工具节点；多接口联动场景平均响应延迟缩短35%，支持20+并发会话。",
        "熔断器、tenacity指数退避重试、Prompt缓存、Pydantic强校验；LLM故障自动降级DB关键词查询，保障服务不中断。",
        "MinerU实现PDF/Word/PPT/Excel六类文档自动解析、切片、向量化入库，配套进度回调API。",
      ],
      frontendPoints: [
        "基于 Vue3 开发 PC 端 + 移动端 H5 双端适配 多租户智能客服运营后台，支持手机 H5 随时查看设备在线状态、实时态势、下发巡检任务，实现移动端全业务闭环。",
        "平台管控模块集成 RBAC 三级权限、监控大盘与 KPI 统计，支持售前售后运维专业知识库上传运维，依靠领域知识约束 Agent 应答，减少输出幻觉，提升答复专业可靠性，实现跨租户数据隔离查看。",
        "基于Cesium完成空天地仓储三维数字孪生，3DTiles分层LOD调度，对接实时数据流，设备点位、巡检轨迹帧同步渲染；图层拆分优化，轨迹插值平滑处理。",
      ],
    },
    {
      name: "哨兵气象遥感数据自动化处理项目",
      role: "独立Web‑Python全栈开发",
      date: "2026.01‑2026.03",
      tech: ["Django", "Vue3", "MySQL", "RESTful API"],
      aiPoints: [],
      projectIntro:
        "本项目基于B/S架构开发，面向哨兵系列卫星遥感影像业务，搭建影像全流程管理与自动化处理平台。支持按入库时间、云量等条件检索哨兵气象遥感数据，实现单条影像下载预处理，同时提供多批次遥感影像批量自动下载、批量预处理能力，完成遥感任务状态管理，提升卫星影像资料处理的工作效率。",
      backendPoints: [
        "Django后端服务+MySQL存储影像元数据与任务信息",
        "开发基于RESTful规范的任务管理API，支持Sentinel卫星遥感影像按日期、云量筛选下载与TXT清单批量自动下载",
        "编写Python桌面自动化脚本，实现遥感影像批量预处理，自动化完成影像裁剪、波段合成等处理流程",
      ],
      frontendPoints: [
        "Vue3 + Element Plus开发前端交互页面，提供影像条件查询、下载任务列表与任务管理面板",
        "对接后端RESTful规范接口，完成完整前后端联调与业务闭环，全栈落地影像自动化处理模块。",
      ],
    },
    {
      name: "福州气象局农作物极低气温预报系统",
      role: "独立Web‑Python全栈开发",
      date: "2025.07‑2025.12",
      projectIntro: "",
      tech: [
        "Django",
        "Vue3",
        "Element Plus",
        "空间插值",
        "Electron",
        "研究生横向课题项目",
      ],
      aiPoints: [],
      projectIntro:
        "本项目聚焦福州市马铃薯冻害等级数字化管理，整合冻害等级信息与防控预案，采用10km×10km栅格建模与空间插值算法实现冻害风险智能预警、等级评估，依托GIS可视化能力完成冻害数据交互展示，支撑农业冻害精准防控。",
      backendPoints: [
        "基于Django开发后台业务接口，构建10km×10km栅格模型，利用空间插值算法完成马铃薯冻害风险等级评估，实现空间运算与业务数据管理。",
        "独立完成后端开发与部署服务器工作，提供地图空间查询、冻害指标计算等核心服务能力。",
      ],
      frontendPoints: [
        "使用Vue3+ElementUI搭建页面，Electron打包桌面端应用，实现冻害栅格地图与业务表单交互及冻害预测服务。",
        "开发地图交互、属性查询、地图编辑等GIS功能，实现冻害空间数据的浏览、检索与编辑操作。",
        "整套系统打包部署到内网服务器，完成桌面端GIS业务系统交付落地。",
      ],
    },
    {
      name: "早期GIS可视化项目合集（2018–2021）",
      role: "二三维GIS前端 & Web全栈开发",
      date: "2018.09‑2021.06",
      projectIntro:
        "参与多个国土、网格治理、应急、遥感领域GIS项目，基于Vue、Cesium、OpenLayers搭建二三维地理可视化系统，覆盖网格管理、国土巡检、消防应急、卫星遥感、渔区监测多类业务场景。",
      tech: [
        "Cesium",
        "OpenLayers",
        "Vue2",
        "GeoServer",
        "PostgreSQL",
        "Django",
        "MySQL",
        "OpenCV",
        "ECharts",
      ],
      aiPoints: [],
      frontendPoints: [
        "深圳网格办网格化管理平台：搭建二三维联动GIS系统，多级网格图层、BIM楼栋可视化，实现地图标绘、空间检索与网格业务后台管理。",
        "凯云国土巡检三维GIS平台：三维地理场景加载，无人机巡检航线、违规点位展示，历史影像比对；OpenCV辅助识别水体污染范围并可视化。",
        "火灾消防应急指挥平台：基于Cesium搭建应急三维底座，支持3DTiles、DEM、遥感多源数据加载；接入无人机视频流，支撑火灾态势推演。",
        "广东渔区数管平台：开发渔区大数据可视化大屏，接入浮标时序监测数据，实现水质、灾害预警多维度可视化展示。",
      ],
    },
  ],

  jobs: [
    {
      date: "2026.03‑2026.07",
      company: "芯禾机器人（深圳）有限公司",
      position: "AI开发工程师",
      points: [
        "AI端负责XinheBot多智能体平台0-1架构设计，实现智能体编排、RAG 知识库、MCP工具能力",
        "后端负责平台落地多租户RBAC权限、数据隔离与安全管控，实现容器化打包交付工作，支撑业务上线试用",
        "前端负责可视化开发：智能客服运营后台与监控大盘，基于Cesium搭建三维数字孪生，实现设备点位、巡检轨迹实时帧同步渲染"
      ],
    },
    {
      date: "2026.01‑2026.03",
      company: "星空数据（广州）有限公司（外包驻场东方思维有限公司）",
      position: "GIS后端开发工程师",
      points: [
        "独立完成哨兵气象遥感数据自动化处理平台后端开发，搭建卫星影像筛选、批量下载与预处理任务调度系统。",
        "参与三维数字孪生项目，主导空间数据库相关业务后端接口开发，封装空间查询、模型元数据RESTful接口；",
        "基于Cesium开发三维场景前端交互页面，完成前后端联调，全栈交付业务模块",
      ],
    },
    {
      date: "2021.09‑2022.07",
      company: "广州广电运通金融电子股份有限公司（国企）",
      position: "WebGIS工程师",
      points: [
        "二三维GIS业务系统开发，负责空间数据可视化、查询分析、组件封装工作。",
        "2022.07 离职，全日制脱产攻读硕士研究生，2025.12 硕士毕业。",
      ],
    },
    {
      date: "2020.09‑2021.09",
      company: "广东瑞图万方科技股份有限公司",
      position: "WebGIS工程师",
      points: [
        "负责老GIS项目PHP转Vue组件化重构；完成深圳网格办BIM二三维联动、企业官网Web/App端开发。",
      ],
    },
    {
      date: "2020.04‑2020.09",
      company: "广东中科瑞泰科技有限公司",
      position: "WebGIS工程师",
      points: [
        "无人机相关三维GIS产品开发，完成国土巡检、消防应急指挥平台的核心业务模块。",
      ],
    },
    {
      date: "2018.10‑2020.02",
      company: "广东航天宏图信息技术有限公司（上市）",
      position: "WebGIS工程师",
      points: [
        "负责渔区数管大屏、海洋相关网站开发",
      ],
    },
  ],

  education: [
    {
      school: "福建师范大学",
      major: "地图学与地理信息系统 · 统招硕士（成绩前5%）",
      date: "2022.09‑2025.12",
    },
    {
      school: "新疆农业大学",
      major: "地理信息科学 · 本科（成绩前5%）",
      date: "2014.09‑2018.06",
    },
  ],

  certificates: [
    "地图制图员四级（地理信息系统）中级技能",
    "全国信息化工程师‑GIS应用人才测评一级",
    "大学英语四级笔试、六级口试",
  ],

  awards: [
    "2017 大学生数学建模大赛省级二等奖、国家励志奖学金、中粮奖学金；省级大创项目立项",
    "本科阶段英语竞赛3项国家级、3项校级奖项",
    "2023 中国虚拟地理环境创新大赛智能体系统设计组一等奖",
    "福建师范大学优秀生源二等奖、一等学业奖学金、三等学业奖学金",
  ],

  footerText:
    "简历最后更新：2026 年 09 月 · 在线版支持浏览器直接打印 / 导出 PDF",
};
