import * as React from 'react'

const Content: React.SFC = ({ children }) => (
  <main>
    <div className="inner">{children}</div>
    <style jsx>{`
      main {
        display: grid;
        grid-template-columns: 1fr 1fr minmax(auto, 640px) 1fr 1fr;
        flex: 1;
        padding: 1.5rem;
      }

      .inner {
        grid-column: 3/4;
      }
    `}</style>
  </main>
)

export default Content
