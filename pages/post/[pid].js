// import { useRouter } from 'next/router'
import PropTypes from 'prop-types';

function Post({ pid }) {
  // const router = useRouter()
  // const { pid } = router.query

  return <h1>Post: {pid}</h1>
}

Post.getInitialProps = async function(context) {
  const { pid } = context.query;

  return {
    pid
  };
};

Post.propTypes = {
  pid: PropTypes.string.isRequired
}

export default Post
