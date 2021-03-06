import React, {PropTypes, Component } from 'react';

class UserPanel extends Component {

  render() {
    if (+this.props.isLogin) {
      return (
        <div>
          你不可能登录
        </div>
      )
    } else {
      return (
        <div className="user-panel box">
          <div className="cell title">
            <strong>此处可以加广告</strong>
          </div>
          <div className="cell">
            <a href="http://mall.baidu.com/">
              <strong>XX产品线</strong>
            </a>
          </div>
          <div className="cell">
            <a href="http://hui.baidu.com/">
              <strong>XX产品线</strong>
            </a>
          </div>
          <div className="cell">
            <a href="/agent/sun/admin/getHot" target="_blank">
              <strong>更新最新数据※快捷操作</strong>
            </a>
          </div>
        </div>
      )
    }
  }
}

UserPanel.propTypes = {
  isLogin: PropTypes.string
};

export default UserPanel
