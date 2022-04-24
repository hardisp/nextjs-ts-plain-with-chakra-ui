import type { NextPage } from 'next'
// import { Container } from '@chakra-ui/react'
import { Component, ReactElement, ReactNode, useState } from 'react'

// Conventional Props
function Heading({ title }: { title?: string }) {
  return <h1>{title}</h1>
}
function HeadingWithContent({
  children,
}: {
  children?: ReactNode
}): ReactElement {
  return <h1>{children}</h1>
}

// defaultProps
const defaultContainerProps = {
  heading: <h1>My Heading</h1>,
}

function Container({
  heading,
  children,
}: {
  // heading?: ReactNode
  children?: ReactNode
} & typeof defaultContainerProps): ReactElement {
  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {heading}
      {children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps

// With FC
const HeadingFC: React.FC<{ title?: string | null }> = ({ title }) => {
  return <h2>{title}</h2>
}

//Functional props
function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number | null>(null)

  return (
    <div>
      <h2>{header?.(state ?? 1)}</h2>
      <div>{children(state ?? 1)}</div>
      <div>
        <button onClick={() => setState((state ?? 1) + 1)}>Add</button>
      </div>
    </div>
  )
}

// List
// With Generic Type
// ListItem as Generic Type: like a T where it will forward what type are filled in that List
function List<ListItem>({
  items,
  render,
}: {
  items: Array<ListItem>
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}>{render(item)}</li>
      })}
    </ul>
  )
}

// class component

class MyClassContainer extends Component<{
  title: ReactNode
}> {
  render() {
    return <h2 style={{ marginTop: '30px' }}>{this.props.title}</h2>
  }
}

const SimpleTsStuff: NextPage = () => {
  return (
    // <Container maxW="container.lg" px="20" py="6">
    <Container>
      <HeadingFC title="Hello FC"></HeadingFC>
      <Heading title="Hello"></Heading>
      <HeadingWithContent>Hello Children</HeadingWithContent>
      {/* <TextWithNumber> */}
      <TextWithNumber header={(num) => <>Start at: {num}</>}>
        {(num: number) => (
          <p>
            Increment number is <strong>{num}</strong>
          </p>
        )}
      </TextWithNumber>

      <List
        items={['Jack', 'michael', 'Doe']} // List item will forward type string because of this
        render={(item: string) => <h3>{item}</h3>}
      ></List>

      <MyClassContainer title="My Class Component" />
    </Container>
    // </Container>
  )
}

export default SimpleTsStuff
