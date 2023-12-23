const section = {
  '.section': {
    border: '2px solid var(--color-primary)',
    position: 'relative',
    borderRadius: '15px',
    padding: '20px',
  },
}

const sectionTitle = {
  '.section-title': {
    color: 'var(--color-text-primary)',
    backgroundColor: 'var(--background-color)',
    position: 'absolute',
    top: '-15px',
    left: '15px',
    padding: '0 10px',
    textTransform: 'uppercase',
  },
}

const sectionContent = {
  '.section-content': {
    borderRadius: '0.625rem',
    padding: '20px',
  },
  '.light .section-content': {
    backgroundColor: '#F1F1F1',
  },
  '.dark .section-content': {
    backgroundColor: '#636363',
  },
}

const all = {
  ...section,
  ...sectionTitle,
  ...sectionContent,
}

export default all
