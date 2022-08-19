import withAuthentication from '../lib/withAuthentication'

export default function Home() {
  return (
      <div className="w-full h-full bg-slate-200" id="sidebar">
          Overview
      </div>

  )
}

export const getServerSideProps = withAuthentication(async (ctx) => {
  console.log(ctx)
  return {
    props: {}
  }
})
