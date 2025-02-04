import React from 'react'
import { createRoot } from 'react-dom/client'
import MagickIDE, { MagickIDEProps } from "@magickml/editor";
import { projectId as _projectId } from '@magickml/engine';

import "./plugins";

// check urlParams for projectId and apiUrl
const projectId = new URLSearchParams(window.location.search).get('projectId') ?? _projectId
const apiUrl = new URLSearchParams(window.location.search).get('apiUrl') ?? import.meta.env.VITE_APP_API_URL ?? 'http://localhost:3030'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
;(window as any).root = root
const config: MagickIDEProps = {
    apiUrl,
    projectId,
}
const Root = () => (
  <MagickIDE config={config} />
)

root.render(<Root />)