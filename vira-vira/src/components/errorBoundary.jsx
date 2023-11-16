import React from "react"

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div 
          style={{
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '90vh',
            fontFamily: 'sans-serif',
            color: '#444444'
          }}
        >
          <h3>Um erro inesperado ocorreu.</h3>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            style={{
              borderRadius: '10px', 
              border: 'none', 
              padding: '10px 20px',
              background: 'teal',
              color: 'white'
            }}
          >
            Tentar novamente
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
