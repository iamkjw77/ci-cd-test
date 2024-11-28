import { Title } from '#components/common/title';
import TodoComponent from '#components/todo/todo';
import { Todo } from '#types/todo';
import { GetServerSideProps } from 'next';

export default function Index({ todos }: { todos: Array<Todo> }) {
  return (
    <div>
      <Title>Hello NextJs!</Title>
      <TodoComponent todos={todos} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const result = await response.json();

  return {
    props: {
      todos: result,
    },
  };
};
