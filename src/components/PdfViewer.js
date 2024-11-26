import React from 'react'
import styled from 'styled-components'
function PdfViewer() {
  return (
    <Container>
      <iframe className='pdf' src='./sample.pdf' />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;

    .pdf{
        width: 100%;
    }


`

export default PdfViewer
