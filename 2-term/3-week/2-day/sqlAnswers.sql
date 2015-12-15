--display the minimum order amount for each customer_id in orders
-- need tables: just orders
SELECT customer_id, MIN(amount)
FROM orders
GROUP BY customer_id
ORDER BY customer_id ASC;

--display all the item names from all the orders that have customer id = 2
SELECT items.name
FROM items
JOIN orderitems ON items.id=orderitems.item_id
JOIN orders ON orderitems.order_id=orders.id
WHERE orders.customer_id=2;
