import * as React from 'react'

import Page from 'components/Page'
import Navigation from 'components/Navigation'
import Content from 'components/Content'

export default () => (
  <Page title="About | Next.js TypeScript Quickstart">
    <Navigation />
    <Content>
      <h1 className="title">This is the blog.</h1>
      <p>
        Perge porro; Igitur ne dolorem quidem. Omnes enim iucundum motum, quo sensus hilaretur. Nam, ut sint illa vendibiliora, haec
        uberiora certe sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers?
      </p>
    </Content>
    <style jsx>{`
      .title {
        margin-top: 0;
      }
    `}</style>
  </Page>
)
