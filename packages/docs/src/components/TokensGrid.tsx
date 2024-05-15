interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table style={{ width: '100%', textAlign: 'center' }}>
      <thead>
        <tr style={{ border: 0 }}>
          <th style={{ border: 0 }}>Name</th>
          <th style={{ border: 0 }}>Value</th>
          {hasRemValue && <th style={{ border: 0 }}>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key} style={{ border: 0 }}>
              <td style={{ border: 0 }}>{key}</td>
              <td style={{ border: 0 }}>{value}</td>
              {hasRemValue && (
                <td style={{ border: 0 }}>
                  {Number(value.replace('rem', '')) * 16}px
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
