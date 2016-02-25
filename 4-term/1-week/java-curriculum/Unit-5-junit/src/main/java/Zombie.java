import java.util.HashMap;

public class Zombie implements Person{

	String name;
	int health;
	Human[] knownHumans;
	String[] victimPleas;
	HashMap<String, Human[]> stomachContents = new HashMap<String, Human[]>();

	public Zombie(String name){
	}

	public Zombie(String name, int health){
	}

	@Override
	public boolean isDead(){
		return true;
	}
}
