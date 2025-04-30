export function PostList() {
  const postsData = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return <ul>{postList}</ul>;
}
