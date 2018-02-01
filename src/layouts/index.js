import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from './index.less';

const query = {
    'screen-xs': {
        maxWidth: 575,
    },
};

class BlogLayout extends React.PureComponent {
    state = {  }
    render() {
        console.log('====================================');
        console.log(this.props.currentUser);
        console.log('====================================');
        const layout = (
            <Layout>
                <Layout>
                    <div>789</div>
                </Layout>
            </Layout>
        );  
        return (
            <DocumentTitle title="你好呀">
                <ContainerQuery query={query}>
                    {params => <div className={classNames(styles.test,params)}>{layout}</div>}
                </ContainerQuery>
            </DocumentTitle>
        );
    }
}

export default connect(({ user, global, loading }) => ({
    currentUser: 'admin'
}))(BlogLayout);