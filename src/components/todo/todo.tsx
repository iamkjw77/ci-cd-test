import useToggle from '#hooks/useToggle';
import { Todo } from '#types/todo';
import Link from 'next/link';
import { useMemo } from 'react';
import styled from 'styled-components';

const Anchor = styled(Link)`
  text-decoration: none;
`;

export default function TodoComponent({ todos }: { todos: Array<Todo> }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export function TodoItem({ todo }: { todo: Todo }) {
  const { id, completed, title } = todo;
  const [complete, toggle] = useToggle(completed);

  const toggleId = useMemo(() => {
    return `toggle_${id}`;
  }, [id]);

  return (
    <li>
      <input
        type="checkbox"
        id={toggleId}
        checked={complete}
        onChange={toggle}
      />

      <label htmlFor={toggleId}>
        <Anchor href={{ pathname: '/todos/[id]', query: { id } }} passHref>
          {title}
        </Anchor>
      </label>
    </li>
  );
}
