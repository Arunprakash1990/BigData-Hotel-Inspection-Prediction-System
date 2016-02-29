package bigdata;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class sentiments {
public static int pos;
public static int neg;
  public static void main(String[] args) {

	//sentiments obj = new sentiments();
	//obj.run();

  }

  public int getPos(String hotel_id) {

	String csvFile = "/Users/roshnaramesh/Downloads/sentiment.csv";
	BufferedReader br = null;
	String line = "";
	String cvsSplitBy = ",";

	try {

		br = new BufferedReader(new FileReader(csvFile));
		while ((line = br.readLine()) != null) {

		        // use comma as separator
			String[] hotel = line.split(cvsSplitBy);
if(hotel[0].equals(hotel_id)){
			//System.out.println("hotel [total= "+hotel[0]+ "total " +hotel[1]+"pos="+ hotel[2] 
              //                   + " , neg=" + hotel[3] + "]");
pos=Integer.parseInt(hotel[2]);
//neg=Integer.parseInt(hotel[3]);
//getpos(pos);
//getneg(neg);
}

		}

	} catch (FileNotFoundException e) {
		e.printStackTrace();
	} catch (IOException e) {
		e.printStackTrace();
	} finally {
		if (br != null) {
			try {
				br.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	return pos;
  }
  public int getNeg(String hotel_id) {

		String csvFile = "/Users/roshnaramesh/Downloads/sentiment.csv";
		BufferedReader br = null;
		String line = "";
		String cvsSplitBy = ",";
	
		try {

			br = new BufferedReader(new FileReader(csvFile));
			while ((line = br.readLine()) != null) {

			        // use comma as separator
				String[] hotel = line.split(cvsSplitBy);
	if(hotel[0].equals(hotel_id)){
				//System.out.println("hotel [total= "+hotel[0]+ "total " +hotel[1]+"pos="+ hotel[2] 
	              //                   + " , neg=" + hotel[3] + "]");
	//pos=Integer.parseInt(hotel[2]);
	neg=Integer.parseInt(hotel[3]);
	//getpos(pos);
	//getneg(neg);
	}

			}

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			if (br != null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		return neg;
	  }

}