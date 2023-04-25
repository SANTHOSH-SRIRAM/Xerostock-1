import React from 'react'

export const Dummy = () => {
    const { createRoot } = ReactDOM;
    const {  Pagination  } = antd;
    const App = () => <Pagination defaultCurrent={6} total={500} />;
    const ComponentDemo = App;
    return (
    <div id='dummy'>

    </div>
  )
}
