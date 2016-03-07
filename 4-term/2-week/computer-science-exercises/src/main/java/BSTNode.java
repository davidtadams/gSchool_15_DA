package main;

public class BSTNode
{
   public int value;
   public BSTNode left;
   public BSTNode right;

   public BSTNode(int value)
   {
      this(value, null, null);
   }

   public BSTNode(int value, BSTNode left, BSTNode right)
   {
      this.value = value;
      this.left = left;
      this.right = right;
   }

   public String toString()
   {
      return Integer.toString(value);
   }
}
