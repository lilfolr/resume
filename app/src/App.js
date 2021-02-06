// Functional
import React, { useEffect, useState, useRef } from "react";

// Structure
import Nav from "./structure/nav";
import ProgressIndicator from "./structure/sideProgress";

import moment from "moment";

// Pages
import Profile from "./pages/profile";
import Education from "./pages/education";

// UI
import { Layout, BackTop, Affix, Tooltip } from "antd";
import { Row, Col, Divider } from "antd";

// Styles
import "antd/dist/antd.css";
import lstyles from "./App.light.module.css";
import dstyles from "./App.dark.module.css";

const footerStyle = {
  textAlign: "center",
  borderTop: "1px solid #303030",
};

const { Header, Content, Footer } = Layout;

const BUILD_TIME = moment.unix(process.env.REACT_APP_BUILD_TIME);

const App = () => {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(prefersDark);
  const [showProgress, setShowProgress] = useState(false);
  const scrollRef = useRef(null);

  const styles = isDark ? dstyles : lstyles;

  useEffect(() => {
    document.getElementById("loadingDiv").style["display"] = "none";
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      setShowProgress(true);
    }
  }, [scrollRef]);

  return (
    <div>
      <BackTop />
      <Layout className={styles.root}>
        <Affix style={{ zIndex: 2 }}>
          <Header style={{ padding: "0" }}>
            <Nav isDark={isDark} setIsDark={setIsDark} />
          </Header>
        </Affix>
        <Content>
          <div ref={scrollRef} className={styles.scrollDiv}>
            <Row>
              <Col flex={1}></Col>
              <Col flex={3} className={styles.content}>
                <Education isDark={isDark} />
                <Divider />
                <Profile isDark={isDark} />
              </Col>
              <Col flex={1}>
                {showProgress && (
                  <ProgressIndicator isDark={isDark} scrollRef={scrollRef} />
                )}
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={footerStyle} className={styles.root}>
          &copy; Leighton Lilford - Last updated{" "}
          <Tooltip
            title={BUILD_TIME.toLocaleString()}
            className={styles.timeTooltip}
          >
            {BUILD_TIME.fromNow()}
          </Tooltip>
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
