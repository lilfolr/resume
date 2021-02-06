// Functional
import React, { useEffect, useState, useRef } from "react";

// Structure
import Nav from "./structure/nav";
import ProgressIndicator from "./structure/sideProgress";

import moment from "moment";

// Pages
import Profile from "./pages/profile";

// UI
import { Layout, BackTop, Affix, Tooltip } from "antd";
import { Row, Col } from "antd";

// Styles
import "antd/dist/antd.css";
import lstyles from "./App.light.module.css";
import dstyles from "./App.dark.module.css";

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
              <Col
                flex={3}
                className={styles.content}
                style={{ height: "10000px" }}
              >
                <Profile isDark={isDark} />
                <div>education</div>
                <div>Content</div>
              </Col>
              <Col flex={1}>
                {showProgress && (
                  <ProgressIndicator isDark={isDark} scrollRef={scrollRef} />
                )}
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }} className={styles.root}>
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
