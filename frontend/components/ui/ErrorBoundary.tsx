'use client'

import { Component, type ReactNode, type ErrorInfo } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div className="flex items-center justify-center min-h-[200px] p-8">
          <div className="text-center">
            <div className="icon-box mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Something went wrong</h3>
            <p className="text-sm text-text-muted mb-4">Please try refreshing the page.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="primary-btn px-4 py-2 text-sm"
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
