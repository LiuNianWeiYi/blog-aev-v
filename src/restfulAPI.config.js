/**
 * 前后台交互的相关 API
 *
 * GET 请求采用queryString的方式传参
 *
 * status: 200 表示成功, 400 表示失败 (值得类型为 Number)
 */

const HOST = 'http://localhost:3000'
export default {
  /* ************************** 登录 ************************ */
  /**
   * 登录验证的 POST 请求
   * request 数据格式 {username: '', password: ''}
   * response 数据格式{username: '', token: '', message: '', status: 200}
   */
  loginUrl: HOST + '/admin/login',

  /* ************************ 文章 ************************* */
  /**
   * 获取文章列表的 GET 请求
   * request 数据格式 ?startRow=0&articleListsLength=10  startRow: 开始的行数; articleListsLength: 总条数
   * response 数据格式
   *    {
   *      result: [
   *        {
   *          articleId: 1,
   *          articleTitle: '',
   *          articleOutline: '',
   *          articleSortName: ''
   *        }
   *      ],
   *      message: '查询文章列表成功',
   *      status: 200
   *    }
   */
  getArticleListsUrl: HOST + '/admin/getArticleLists',

  /**
   * 添加文章的 POST 请求
   * request 数据格式
   *    {
   *      articleTitle: '',
   *      articleOutline: '',
   *      articleSort: 1,
   *      articleContent: '',
   *      articleEditorType: 0,
   *      userId: 1
   *    }
   * response 数据格式 {message: '添加文章成功', status: 200}
   */
  addArticleUrl: HOST + '/admin/addArticle',

  /**
   * 修改文章获取数据的 GET 请求
   * request 数据格式 ?articleId=1
   * response 数据格式 {
      result: {
        articleId: 1,
        articleTitle: '',
        articleOutline: '',
        articleSortId: 1,
        articleContent: '',
      },
      message: '查询文章成功',
      status: 200
    }
   */
  getModifyArticleUrl: HOST + '/admin/getModifyArticle',

  /**
   * 修改文章提交数据的 POST 请求
   * request 数据格式 {
   *      articleId: 0,
   *      articleTitle: '',
   *      articleOutline: '',
   *      articleSortId: 1,
   *      articleContent: ''
   *    }
   * response 数据格式 {message: '修改文章成功', status: 200}
   */
  modifyArticleUrl: HOST + '/admin/modifyArticle',

  /**
   * 删除文章的 GET 请求
   * request 数据格式 ?articleId=1
   * response 数据格式 {message: '删除文章成功', status: 200}
   */
  deleteArticleUrl: HOST + '/admin/deleteArticle',

  /* ************************ 文章分类 ************************ */
  /**
   * 获取文章分类列表的 GET 请求
   * request 数据为空
   * response 数据格式{result: [{sortId: 1, sortName: 'Golang', sortOrder: 2}], message: '', status: 200}
   */
  getArticleSortListsUrl: HOST + '/admin/getArticleSortLists',

  /**
   * 添加文章分类的 POST 请求
   * request 数据格式 {sortName: '', sortOrder: ''}
   * response 数据格式{message: '', status: 200}
   */
  addArticleSortUrl: HOST + '/admin/addArticleSort',

  /**
   * 修改文章分类获取数据的 GET 请求
   * request 数据格式 ?articleSortId=id
   * response 数据格式 {
        result: {
          sortId: 1,
          sortName: '',
          sortOrder: 2
        },
        message: '查询分类成功',
        status: 200
      }
   */
  getModifyArticleSortUrl: HOST + '/admin/getModifyArticleSort',

  /**
   * 修改文章分类提交数据的 POST 请求
   * request 数据格式 {sortId: 0, sortName: '', sortOrder: 1}
   * response 数据格式 {message: '修改分类成功', status: 200}
   */
  modifyArticleSortUrl: HOST + '/admin/modifyArticleSort',

  /**
   * 删除文章分类的 GET 请求
   * request 数据格式 ?articleSortId=1
   * response 数据格式 {message: '删除分类成功', status: 200}
   */
  deleteArticleSortUrl: HOST + '/admin/deleteArticleSort',

  /* *************************** 网站信息管理 *************************** */
  /**
   * 获取网站信息的 GET 请求
   */
  getWebsiteUrl: HOST + '/admin/getWebsite',

  /**
   * 修改网站信息的 POST 请求
   */
  modifyWebsiteUrl: HOST + '/admin/modifyWebsite'
}
