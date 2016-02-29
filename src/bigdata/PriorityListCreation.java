package bigdata;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class PriorityListCreation {
	public static void main(String[] args) throws IOException
	{
		int totRevs=1621956;
		int totHotels=12773;
		int mean=totRevs/totHotels;
		System.out.println(mean);
		int sd=calcSD(mean,totHotels);
		System.out.println("SD: "+sd + " Mean:"+mean);
		
	}
	public static int calcSD(int mean,int n) throws IOException
	{
		int totRev=0;
		int sd=0;
		int sum=0;
		int count=1;
		int max=0;
		int zero=0;
		BufferedReader reader = new BufferedReader(new FileReader("sortedstats.csv"));
		FileWriter fw=new FileWriter("output.csv");
		try {
				String line;
				String header=reader.readLine();
				while ((line = reader.readLine()) != null) {
					//System.out.println(++count+" "+line);
					String[] tokens = line.split(",");
					//int hotelid=Integer.parseInt(tokens[0]);
					double tot= Double.parseDouble(tokens[1]);
					double pos= Double.parseDouble(tokens[2]);
					double neg=Double.parseDouble(tokens[3]);
					
					double weight=0.0;
					if(tot !=0.0 && neg>pos)
					weight=((neg/tot)*(tot/mean))*100;
					else
					{
						System.out.println(tokens[0]);
						weight=0.0;
					}
						
					//System.out.println(tot+" "+neg+" "+Double.toString(weight).split("\\.")[0]);
					fw.append(tokens[0]);
					fw.append(",");
					fw.append(Double.toString(weight).split("\\.")[0]);
					fw.append("\n");
			/*		System.out.println( count++ + " " +x );
					int temp=(int) Math.pow((x-mean), 2);
					sum=sum+temp;
					totRev=totRev+x;
					//System.out.println(sum+ " "+ temp); */
				}
			} finally {
				reader.close();
				fw.flush();
				fw.close();
			}
		sd=(int) Math.sqrt(sum/n);
		System.out.println("totalREView"+totRev);
		System.out.println(max);
		System.out.println(zero);
		return sd;
	}

}
