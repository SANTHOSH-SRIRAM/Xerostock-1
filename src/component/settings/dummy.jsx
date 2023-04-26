import React from 'react'
import Image from "../assest/assest.js"
import { createRoot } from 'react-dom'
import { ReactDOM } from 'react-dom'
export const Dummy = () => {
    const { createRoot } = ReactDOM;
    // const {  Pagination  } = antd;
    const App = () => <Image defaultCurrent={6} total={500} />;
    const ComponentDemo = App;
    createRoot(mountNode).render(<ComponentDemo />);

    return (
    <div id='dummy'>
      <div id="container"/>
    <script>const mountNode = document.getElementById('container');</script>
    </div>
  )
}
