import React from 'react'
import PropTypes from 'prop-types'
import { LinksPageTemplate } from '../../templates/links-page'

const LinksPagePreview = ({ entry, getAsset }) => {
  const entryLinks = entry.getIn(['data', 'links'])
  const links = entryLinks ? entryLinks.toJS() : []

  return (
    <LinksPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      links={links}
    />
  )
}

LinksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LinksPagePreview
